import { marked } from 'marked';

export type CheatsheetContent = {
	[section: string]: SectionContent;
};

export type CheatsheetMarkdowns = {
	[section: string]: string;
};

export function parseCheatsheet(data: CheatsheetMarkdowns): CheatsheetContent {
	return Object.entries(data).reduce((result, [section, content]) => {
		result[section] = parseSectionMarkdown(content);
		return result;
	}, {} as CheatsheetContent);
}

export type HtmlContent = {
	type: 'html';
	content: string;
};

export type CodeBlockContent = {
	type: 'code';
	content: string;
	language?: string;
};

export type Content = HtmlContent | CodeBlockContent;

export type SectionContent = {
	[subsection: string]: Content[];
};

export function parseSectionMarkdown(markdown: string): SectionContent {
	const tokens = marked.lexer(markdown);

	if (tokens.length === 0) {
		return {};
	}

	// Insert first subsection heading if not found
	const firstToken = tokens[0];
	if (firstToken.type !== 'heading' || firstToken.depth !== 2) {
		tokens.unshift({
			type: 'heading',
			depth: 2,
			raw: '## Subsection not defined!!!\n\n',
			text: 'Subsection not defined!!!',
			tokens: []
		});
	}

	const subsectionTokens = splitSubsectionsTokens(tokens);

	return Object.entries(subsectionTokens).reduce((result, [subsection, tokens]) => {
		result[subsection] = groupTokens(tokens).map((group) => toContent(group));
		return result;
	}, {} as SectionContent);
}

type SubsectionTokens = {
	[subsection: string]: marked.Token[];
};

function splitSubsectionsTokens(tokens: marked.TokensList): SubsectionTokens {
	const result: SubsectionTokens = {};

	const subsectionHeaders = tokens
		.map((token, index) => ({ token, index }))
		.filter(({ token }) => token.type === 'heading' && token.depth === 2) as {
		token: marked.Tokens.Heading;
		index: number;
	}[];

	for (const [i, subsection] of subsectionHeaders.entries()) {
		const subsectionHasContent = subsection.index !== tokens.length - 1;
		if (!subsectionHasContent) {
			continue;
		}

		const isLastSubsection = i === subsectionHeaders.length - 1;
		const start = subsection.index + 1;
		const end = isLastSubsection ? undefined : subsectionHeaders[i + 1].index;
		result[subsection.token.text] = tokens.slice(start, end);
	}

	return result;
}

type CodeTokenGroup = {
	type: 'code';
	token: marked.Tokens.Code;
};

type TextTokenGroup = {
	type: 'text';
	tokens: marked.Token[];
};

type TokensGroup = CodeTokenGroup | TextTokenGroup;

function groupTokens(tokens: marked.TokensList | marked.Token[]): TokensGroup[] {
	const groups: TokensGroup[] = [];

	let curTextGroup: TextTokenGroup | null = null;

	for (const token of tokens) {
		if (token.type === 'code') {
			if (curTextGroup) {
				groups.push(curTextGroup);
				curTextGroup = null;
			}

			groups.push({
				type: 'code',
				token
			});
		} else {
			curTextGroup = curTextGroup ?? {
				type: 'text',
				tokens: []
			};

			curTextGroup.tokens.push(token);
		}
	}

	if (curTextGroup) {
		groups.push(curTextGroup);
	}

	return groups;
}

function toContent(group: TokensGroup): Content {
	switch (group.type) {
		case 'code':
			return {
				type: 'code',
				content: group.token.text,
				language: group.token.lang
			};
		case 'text':
			return {
				type: 'html',
				content: marked.parser(group.tokens)
			};
	}
}

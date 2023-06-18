import { marked } from "marked";

export type HtmlContent = {
	type: "html";
	content: string;
};

export type CodeBlockContent = {
	type: "code";
	content: string;
	language?: string;
};

export type Content = HtmlContent | CodeBlockContent;

export function parseMarkdown(markdown: string): Content[] {
	const tokens = marked.lexer(markdown);

	const tokensGroup = groupTokens(tokens);
	return tokensGroup.map((group) => toContent(group));
}

type CodeTokenGroup = {
	type: "code";
	token: marked.Tokens.Code;
};

type TextTokenGroup = {
	type: "text";
	tokens: marked.Token[];
};

type TokensGroup = CodeTokenGroup | TextTokenGroup;

function groupTokens(tokens: marked.TokensList): TokensGroup[] {
	const groups: TokensGroup[] = [];

	let curTextGroup: TextTokenGroup | null = null;

	for (const token of tokens) {
		if (token.type === "code") {
			if (curTextGroup) {
				groups.push(curTextGroup);
				curTextGroup = null;
			}

			groups.push({
				type: "code",
				token
			});
		} else {
			curTextGroup = curTextGroup ?? {
				type: "text",
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
		case "code":
			return {
				type: "code",
				content: group.token.text,
				language: group.token.lang
			};
		case "text":
			return {
				type: "html",
				content: marked.parser(group.tokens)
			};
	}
}

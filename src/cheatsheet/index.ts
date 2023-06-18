import { parseMarkdown } from "./parse";
import alert from "./snippets/basics/alert.md?raw";
import comments from "./snippets/basics/comments.md?raw";
import consoleLog from "./snippets/basics/console-log.md?raw";
import variables from "./snippets/basics/variables.md?raw";
import plus from "./snippets/string/+.md?raw";
import charAt from "./snippets/string/char-at.md?raw";
import declaration from "./snippets/string/declaration.md?raw";
import length from "./snippets/string/length.md?raw";
import substring from "./snippets/string/substring.md?raw";
import templateLiteral from "./snippets/string/template-literal.md?raw";
import toLowerCase from "./snippets/string/to-lower-case.md?raw";
import toUpperCase from "./snippets/string/to-upper-case.md?raw";

export const content = {
	Basics: {
		"console.log()": parseMarkdown(consoleLog),
		comments: parseMarkdown(comments),
		variables: parseMarkdown(variables),
		alert: parseMarkdown(alert)
	},
	String: {
		declaration: parseMarkdown(declaration),
		"+": parseMarkdown(plus),
		"template literal": parseMarkdown(templateLiteral),
		".length": parseMarkdown(length),
		".substring()": parseMarkdown(substring),
		".charAt()": parseMarkdown(charAt),
		".toUpperCase()": parseMarkdown(toUpperCase),
		".toLowerCase()": parseMarkdown(toLowerCase)
	}
};

import alert from "../snippets/en/basics/alert.js?raw";
import comments from "../snippets/en/basics/comments.js?raw";
import consoleLog from "../snippets/en/basics/console-log.js?raw";
import variables from "../snippets/en/basics/variables.js?raw";
import plus from "../snippets/en/string/+.js?raw";
import charAt from "../snippets/en/string/char-at.js?raw";
import declaration from "../snippets/en/string/declaration.js?raw";
import length from "../snippets/en/string/length.js?raw";
import substring from "../snippets/en/string/substring.js?raw";
import templateLiteral from "../snippets/en/string/template-literal.js?raw";
import toLowerCase from "../snippets/en/string/to-lower-case.js?raw";
import toUpperCase from "../snippets/en/string/to-upper-case.js?raw";

export const en = {
	Basics: {
		"console.log()": consoleLog,
		comments: comments,
		variables: variables,
		alert: alert
	},
	String: {
		declaration: declaration,
		"+": plus,
		"template literal": templateLiteral,
		".length": length,
		".substring()": substring,
		".charAt()": charAt,
		".toUpperCase()": toUpperCase,
		".toLowerCase()": toLowerCase
	}
} as const;

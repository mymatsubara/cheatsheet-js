import alert from "./snippets/basics/alert.js?raw";
import comments from "./snippets/basics/comments.js?raw";
import consoleLog from "./snippets/basics/console-log.js?raw";
import variables from "./snippets/basics/variables.js?raw";
import plus from "./snippets/string/+.js?raw";
import charAt from "./snippets/string/char-at.js?raw";
import declaration from "./snippets/string/declaration.js?raw";
import length from "./snippets/string/length.js?raw";
import substring from "./snippets/string/substring.js?raw";
import templateLiteral from "./snippets/string/template-literal.js?raw";
import toLowerCase from "./snippets/string/to-lower-case.js?raw";
import toUpperCase from "./snippets/string/to-upper-case.js?raw";

export const content = {
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
};

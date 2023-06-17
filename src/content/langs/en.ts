import alert from "../snippets/en/basics/alert.js?raw";
import comments from "../snippets/en/basics/comments.js?raw";
import consoleLog from "../snippets/en/basics/console-log.js?raw";
import variables from "../snippets/en/basics/variables.js?raw";
import plus from "../snippets/en/string/+.js?raw";
import declaration from "../snippets/en/string/declaration.js?raw";
import templateLiteral from "../snippets/en/string/template-literal.js?raw";

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
		"template literal": templateLiteral
	}
} as const;

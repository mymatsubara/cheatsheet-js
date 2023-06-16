import ace from "ace-builds";
import inspect from "browser-util-inspect";

const CDN = "https://cdn.jsdelivr.net/npm/ace-builds@1.22.1/src-min-noconflict";
const defaultLogger = console.log;

// Now we tell ace to use the CDN locations to look for files
ace.config.set("basePath", CDN);
ace.config.set("modePath", CDN);
ace.config.set("themePath", CDN);
ace.config.set("workerPath", CDN);

export function makeEditor(e: Element, theme?: string) {
	theme = theme ?? "monokai";
	const editor = ace.edit(e);

	editor.setTheme(`ace/theme/${theme}`);
	editor.session.setMode("ace/mode/javascript");
	editor.setShowPrintMargin(false);
	editor.setOption("showLineNumbers", false);

	return editor;
}

export function runCode(editor: ace.Ace.Editor): string {
	const code = editor.getValue();

	const logs: any[][] = [];
	console.log = (...data: any[]) => {
		logs.push(data);
	};

	try {
		eval(code);
	} catch (e) {
		logs.push([`❌ Error: ${e}`]);
	} finally {
		console.log = defaultLogger;
	}

	return logs.map((l) => format(...l)).join("\n");
}

function format(...args: any[]) {
	return args
		.map((l: any) => (typeof l === "string" ? l : inspect(l)))
		.join(" ");
}

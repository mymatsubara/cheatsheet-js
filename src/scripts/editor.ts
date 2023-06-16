import ace from "ace-builds";
import inspect from "browser-util-inspect";

interface EditorConfigs {
	theme?: string;
	language?: string;
	showPrintMargin?: boolean;
	showLineNumbers?: boolean;
}

const CDN = "https://cdn.jsdelivr.net/npm/ace-builds@1.22.1/src-min-noconflict";
const defaultLogger = console.log;

// Now we tell ace to use the CDN locations to look for files
ace.config.set("basePath", CDN);
ace.config.set("modePath", CDN);
ace.config.set("themePath", CDN);
ace.config.set("workerPath", CDN);

export function makeEditor(e: Element, config?: EditorConfigs) {
	let cfg = {
		theme: "monokai",
		language: "javascript",
		showPrintMargin: false,
		showLineNumbers: false,
		...config,
	};

	const editor = ace.edit(e);

	editor.setTheme(`ace/theme/${cfg.theme}`);
	editor.session.setMode(`ace/mode/${cfg.language}`);
	editor.setShowPrintMargin(cfg.showPrintMargin);
	editor.setOption("showLineNumbers", cfg.showLineNumbers);

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

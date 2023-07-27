import ace from "ace-builds";
import inspect from "browser-util-inspect";
import type { Writable } from "svelte/store";

export interface EditorConfigs {
	theme?: string;
	language?: string;
	showPrintMargin?: boolean;
	showLineNumbers?: boolean;
	showGutter?: boolean;
	paddingX?: number;
	paddingY?: number;
	lineHighlight?: boolean;
	maxLines?: number;
}

const CDN = "https://cdn.jsdelivr.net/npm/ace-builds@1.22.1/src-min-noconflict";
const defaultLogger = console.log;

// Now we tell ace to use the CDN locations to look for files
ace.config.set("basePath", CDN);
ace.config.set("modePath", CDN);
ace.config.set("themePath", CDN);
ace.config.set("workerPath", CDN);

const defaultConfig = {
	theme: "dracula",
	language: "javascript",
	showPrintMargin: false,
	showLineNumbers: false,
	showGutter: false,
	paddingX: 20,
	paddingY: 10,
	lineHighlight: false
} as const satisfies EditorConfigs;

export function makeEditor(e: Element, config?: EditorConfigs) {
	let cfg = {
		...defaultConfig,
		...config
	};

	const editor = ace.edit(e);

	const px = cfg.paddingX;
	const py = cfg.paddingY;

	editor.renderer.setScrollMargin(py, py, py, py);
	editor.renderer.setPadding(px);

	editor.setTheme(`ace/theme/${cfg.theme}`);
	editor.session.setMode(`ace/mode/${cfg.language}`);
	editor.setShowPrintMargin(cfg.showPrintMargin);

	editor.setOption("showLineNumbers", cfg.showLineNumbers);
	editor.setOption("showGutter", cfg.showGutter);
	editor.setHighlightActiveLine(cfg.lineHighlight);
	if (cfg.maxLines) {
		editor.setOption("maxLines", cfg.maxLines);
	}

	return editor;
}

let count = 0;

export function runCode(editor: ace.Ace.Editor, logs: Writable<string[]>) {
	const log = `log_${count++}`;
	count %= 50;

	let code = editor.getValue();
	code = code.replace(/console[\s\t\n\r]*.[\s\t\n\r]*log/g, `console.${log}`);

	(console as any)[log] = (...data: any[]) => {
		logs?.update((logs) => {
			logs?.push(format(...data));
			return logs;
		});
	};

	try {
		eval(code);
	} catch (e) {
		logs.update((logs) => {
			logs.push(`❌ Error: ${e}`);
			return logs;
		});
	}
}

function format(...args: any[]) {
	if (args.length === 0) {
		return "\n";
	}

	return args
		.map((l: any) => (typeof l === "string" ? l : inspect(l)))
		.join(" ");
}

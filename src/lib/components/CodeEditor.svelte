<script lang="ts">
	import type { Ace } from "ace-builds";
	import { onDestroy } from "svelte";
	import { writable } from "svelte/store";
	import { makeEditor, runCode, type EditorConfigs } from "../scripts/editor";
	import RefreshIcon from "./icons/RefreshIcon.svelte";

	export let code: string;
	export let height: string | undefined = undefined;
	export let config: EditorConfigs = {};
	export let autorun = true;

	let canRun =
		config.language === undefined || config.language === "javascript";

	let editorElement: HTMLElement;
	let editor: Ace.Editor;
	let setup = false;
	let logs = writable<string[]>([]);

	if (!height) {
		config.maxLines = config.maxLines ?? 100;
	}

	function run() {
		logs = writable([]);
		runCode(editor, logs);
	}

	$: {
		if (editorElement && !setup) {
			let debounceTimeout: NodeJS.Timeout;
			editor = makeEditor(editorElement, config);

			if (autorun && canRun) {
				run();
				editor.session.on("change", () => {
					debounceTimeout && clearTimeout(debounceTimeout);
					debounceTimeout = setTimeout(run, 500);
				});
			} else {
				editor.session.removeListener("change", () => {});
			}

			setup = true;
		}
	}

	onDestroy(() => {
		editor?.destroy();
	});
</script>

<div class="mb-6">
	<div
		bind:this={editorElement}
		class="text-sm code-editor font-semibold"
		style={height ? `height: ${height}` : ""}
	>
		{code}
	</div>
	<div class="flex gap-2">
		{#if $logs?.length}
			<div
				class="code-font text-sm flex flex-col gap-1 px-5 py-2 grow bg-neutral-100 border border-neutral-200"
			>
				<div class="flex gap-2 items-center">
					<div class="underline">Output:</div>
					<button
						class="hover:bg-neutral-300 rounded p-1"
						title="Rerun"
						on:click={() => {
							$logs = [];
							setTimeout(() => {
								run();
							}, 100);
						}}
					>
						<RefreshIcon stroke-width="2.0" class="text-neutral-500 h-4" />
					</button>
				</div>
				<div>
					{#each $logs as line}
						<div class="whitespace-pre">{line}</div>
					{/each}
				</div>
			</div>
		{/if}
		{#if !autorun && canRun}
			<button
				on:click={run}
				class="px-3 py-2 rounded-xl bg-neutral-300 hover:bg-neutral-400 h-max font-semibold"
				id="execute">Run</button
			>
		{/if}
	</div>
</div>

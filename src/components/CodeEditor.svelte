<script lang="ts">
	import { onDestroy } from "svelte";
	import { makeEditor, runCode, type EditorConfigs } from "../scripts/editor";

	export let code: string;
	export let height: string | undefined = undefined;
	export let autorun = true;
	export let config: EditorConfigs = {};

	let editorElement: HTMLElement;
	let output: string | undefined = undefined;

	if (!height) {
		config.maxLines = config.maxLines ?? 100;
	}

	$: editor = makeEditor(editorElement, config);

	function run() {
		const newOutput = runCode(editor);
		output = newOutput.replaceAll("\n", "<br>");
	}

	$: {
		if (autorun) {
			run();
			editor.session.on("change", () => {
				run();
			});
		} else {
			editor.session.removeListener("change", () => {});
		}
	}

	onDestroy(() => {
		editor?.destroy();
	});
</script>

<div>
	<div
		bind:this={editorElement}
		class="text-sm code-font"
		style={height ? `height: ${height}` : ""}
	>
		{code}
	</div>
	<div class="flex gap-2">
		{#if output}
			<div
				class="code-font text-sm flex flex-col gap-1 px-5 py-2 grow bg-neutral-200"
			>
				<div class="font-semibold">Output:</div>
				<div>
					<div>{@html output}</div>
				</div>
			</div>
		{/if}
		{#if !autorun}
			<button
				on:click={run}
				class="px-3 py-2 rounded-xl bg-neutral-300 hover:bg-neutral-400 h-max font-semibold"
				id="execute">Run</button
			>
		{/if}
	</div>
</div>

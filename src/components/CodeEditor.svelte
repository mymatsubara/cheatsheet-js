<script lang="ts">
	import { onDestroy } from "svelte";
	import { makeEditor, runCode, type EditorConfigs } from "../scripts/editor";

	export let code: string;
	export let height: number | undefined = undefined;
	export let autorun = true;
	export let config: EditorConfigs | undefined = undefined;

	const newLines = [...code.matchAll(/\n/g)].length;
	height = height ?? (newLines + 2) * 20;

	let editorElement: HTMLElement;
	$: editor = makeEditor(editorElement, config);
	let output: string | undefined = undefined;

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

<div class="flex flex-col gap-2">
	<div
		bind:this={editorElement}
		class="text-sm rounded code-font"
		style="height: {height}px"
	>
		{code}
	</div>
	<div class="flex gap-2">
		<div class="flex flex-col gap-1 grow">
			{#if output}
				<div class="font-semibold">Output:</div>
				<div
					class="flex flex-col gap-1 px-5 py-2 rounded bg-neutral-200"
				>
					<div class="text-sm code-font">{@html output}</div>
				</div>
			{/if}
		</div>
		{#if !autorun}
			<button
				on:click={run}
				class="px-3 py-2 rounded-xl bg-neutral-300 hover:bg-neutral-400 h-max font-semibold"
				id="execute">Run</button
			>
		{/if}
	</div>
</div>

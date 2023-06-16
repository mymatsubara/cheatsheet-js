<script lang="ts">
	import { onDestroy } from "svelte";
	import { makeEditor, runCode } from "../scripts/editor";

	export let code: string;
	export let theme: string = "monokai";
	export let height: number | undefined;

	const newLines = [...code.matchAll(/\n/g)].length;
	height = height ?? (newLines + 2) * 22;

	let editorElement: HTMLElement;
	$: editor = makeEditor(editorElement, { theme });
	let output: string | undefined = undefined;

	function run() {
		const newOutput = runCode(editor);
		output = newOutput.replaceAll("\n", "<br>");
	}

	onDestroy(() => {
		editor?.destroy();
	});
</script>

<div class="flex flex-col gap-2">
	<div bind:this={editorElement} class="text-sm" style="height: {height}px">
		{code}
	</div>
	<div class="flex gap-2">
		<div class="flex flex-col gap-1 grow px-5 py-1 bg-neutral-200">
			<div class="font-semibold">Output:</div>
			{#if output}
				<div class="">{@html output}</div>
			{/if}
		</div>
		<button
			on:click={run}
			class="px-3 py-2 bg-neutral-300 hover:bg-neutral-400 h-max font-semibold"
			id="execute">Run</button
		>
	</div>
</div>

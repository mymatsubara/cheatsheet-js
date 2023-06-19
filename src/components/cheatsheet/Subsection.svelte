<script lang="ts">
	import type { Content } from "../../cheatsheet/parse";
	import CodeEditor from "../CodeEditor.svelte";
	import ChevronDownIcon from "../icons/ChevronDownIcon.svelte";

	export let contents: Content[];
	export let title: string;

	export let open = false;
</script>

<div class="subsection">
	<label class="cursor-pointer">
		<div class="hover:bg-neutral-100 p-1.5 border-b border-neutral-200">
			<div class="flex justify-between items-center">
				<h3 class="text-blue-700 font-semibold text-sm">
					{title}
				</h3>
				<div class="chevron">
					<ChevronDownIcon class="h-5 text-neutral-700" />
				</div>
			</div>
			<input bind:value={open} class="hidden" type="checkbox" />
		</div>
	</label>

	<div class="subsection-container">
		{#if open}
			<div>
				{#each contents as block}
					{#if block.type === "code"}
						<div class="mb-3">
							<CodeEditor
								code={block.content}
								config={{ language: block.language }}
							/>
						</div>
					{:else}
						<div class="prose my-3 px-3">
							{@html block.content}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.subsection {
		--animation: ease-out 200ms;
	}

	/* Animate container */
	.subsection-container {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows var(--animation);
	}

	label:has(input:checked) + .subsection-container {
		grid-template-rows: 1fr;
	}

	.subsection-container > div {
		overflow: hidden;
	}

	/* Animate chevron rotation */
	.chevron {
		transition: rotate var(--animation);
	}

	label:has(input:checked) .chevron {
		rotate: 180deg;
	}
</style>

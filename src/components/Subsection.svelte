<script lang="ts">
	import SubsectionContent from "./SubsectionContent.svelte";
	import ChevronDown from "./icons/ChevronDown.svelte";
	import type { SubsectionData } from "./types";

	export let data: SubsectionData;
	export let open = false;
</script>

<div class="subsection">
	<label class="cursor-pointer">
		<div
			class="bg-neutral-200 hover:bg-neutral-300 p-2 border-b border-neutral-300"
		>
			<div class="flex justify-between items-center">
				<h3 class="text-blue-700 font-semibold font-sm code-font">
					{data.title}
				</h3>
				<div class="chevron">
					<ChevronDown class="h-5 text-neutral-700" />
				</div>
			</div>
			<input bind:value={open} class="hidden" type="checkbox" />
		</div>
	</label>

	<div class="subsection-container">
		{#if open}
			<div>
				<div class="p-3 border-neutral-200">
					<SubsectionContent {data} />
				</div>
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

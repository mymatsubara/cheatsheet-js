<script lang="ts">
	import Section from "./Section.svelte";
	import type { CheatSheetData } from "./types";

	export let sections: CheatSheetData;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 code-font">
	{#each Object.entries(sections) as [title, subsections]}
		<Section {title} {subsections} />
	{/each}
</div>

<script lang="ts">
	import Section from "./Section.svelte";
	import type { SectionData } from "./types";

	export let sections: SectionData[];
	sections.sort((s1, s2) => s2.index - s1.index);
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 code-font">
	{#each sections as section (section.index)}
		<Section data={section} />
	{/each}
</div>

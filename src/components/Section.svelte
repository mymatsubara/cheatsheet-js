<script lang="ts">
	import Subsection from "./Subsection.svelte";
	import type { SectionData } from "./types";

	export let data: SectionData;
	data.subsections.sort((s1, s2) => s1.index - s2.index);
</script>

<section class="bg-white rounded p-3 flex flex-col gap-2 shadow-lg">
	<h2 class="text-xl font-bold">{data.title}</h2>
	<hr />
	<div>
		{#each data.subsections as subsection (subsection.index)}
			<Subsection data={subsection} />
		{/each}
	</div>
</section>

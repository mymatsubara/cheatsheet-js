<script lang="ts">
	import { slugify } from "../../lib/helpers/string";
	import Subsection from "./Subsection.svelte";
	import type { SectionData } from "./types";

	export let subsections: SectionData;
	export let title: string;
</script>

<section class="bg-white rounded p-3 flex flex-col gap-2 shadow-lg">
	<h2 id={slugify(title)} class="text-xl font-bold">{title}</h2>
	<hr />
	<div>
		{#each Object.entries(subsections) as [subsectionTitle, contents] (subsectionTitle)}
			<Subsection title={subsectionTitle} {contents} />
		{/each}
	</div>
</section>

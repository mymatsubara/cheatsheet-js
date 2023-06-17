<script lang="ts">
	import Fuse from "fuse.js";
	import { searchQuery } from "../../scripts/svelte/search-store";
	import Section from "./Section.svelte";
	import type { CheatSheetData } from "./types";

	export let sections: CheatSheetData;

	const mapped = Object.entries(sections).flatMap(([section, data]) =>
		Object.entries(data).map(([subsection, code]) => ({
			section,
			subsection,
			code
		}))
	);

	const fuse = new Fuse(mapped, {
		keys: [
			{
				name: "section",
				weight: 3
			},
			{ name: "subsection", weight: 3 },
			{ name: "code", weight: 1 }
		]
	});
	type FuzzySearcher = typeof fuse;

	function filter(
		data: CheatSheetData,
		query: string,
		fuzzy: FuzzySearcher
	): CheatSheetData {
		const r = fuzzy.search(query);

		console.log(r.map((r) => r.score));

		const matches = r.map((r) => r.item);

		const results = matches.reduce((result, { section, subsection }) => {
			const sectionMatch = data[section];
			const subsectionMatch = data[section]?.[subsection];

			if (sectionMatch && subsectionMatch) {
				result[section] = { ...result[section], [subsection]: subsectionMatch };
			}

			return result;
		}, {} as CheatSheetData);

		return results;
	}

	$: filteredSections = $searchQuery
		? filter(sections, $searchQuery, fuse)
		: sections;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 code-font">
	{#each Object.entries(filteredSections) as [title, subsections] (title)}
		<Section {title} {subsections} />
	{/each}
</div>

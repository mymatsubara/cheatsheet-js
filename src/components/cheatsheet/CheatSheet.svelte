<script lang="ts">
	import Fuse from "fuse.js";
	import Masonry from "svelte-bricks";
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
		keys: ["section", "subsection"],
		threshold: 0.2
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
	$: items = Object.entries(filteredSections).map(([title, subsections]) => ({
		title,
		subsections
	}));
</script>

<Masonry
	animate={false}
	maxColWidth={1000}
	minColWidth={500}
	gap={20}
	{items}
	idKey="title"
	let:item
>
	{#if item}
		<Section title={item.title} subsections={item.subsections} />
	{/if}
</Masonry>

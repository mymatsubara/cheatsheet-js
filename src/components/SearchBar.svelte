<script>
	import { searchQuery } from "../scripts/svelte/search-store";
	import SearchIcon from "./icons/SearchIcon.svelte";
</script>

<label class="relative h-max">
	<SearchIcon
		class="fill-neutral-700 absolute left-1.5 top-1/2 -translate-y-1/2 h-5"
	/>
	<input
		class="rounded bg-neutral-100 pl-9 pr-2 py-1 text-neutral-700 shadow code-font"
		bind:value={$searchQuery}
		type="search"
		aria-label="Search"
		placeholder="Search"
	/>
</label>

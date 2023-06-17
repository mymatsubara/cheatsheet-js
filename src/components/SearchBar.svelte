<script>
	import { searchQuery } from "../scripts/svelte/search-store";
</script>

<input
	class="rounded bg-neutral-100 px-3 py-1 text-neutral-700 shadow code-font"
	bind:value={$searchQuery}
	type="search"
/>

<script lang="ts">
	import { searchQuery } from '$lib/stores/search';
	import { onMount } from 'svelte';
	import SearchIcon from './icons/SearchIcon.svelte';

	let search: HTMLInputElement;
	let innerWidth: number;
	export let open: boolean | undefined = undefined;

	$: {
		if (open === undefined && innerWidth) {
			open = innerWidth > 640;
		}
	}

	onMount(async () => {
		document.addEventListener('keypress', (event) => {
			const key = event.key;

			if (key === '/') {
				event.preventDefault();
				search.focus();
			}
		});
	});
</script>

<svelte:window bind:innerWidth />

<label class="relative h-max">
	<input on:click={() => search.focus()} bind:checked={open} class="hidden" type="checkbox" />
	<div class="rounded icon fill-neutral-700 absolute left-1.5 top-1/2 -translate-y-1/2 h-8 p-1">
		<SearchIcon class="h-full" />
	</div>
	<input
		class="search rounded bg-neutral-100 py-1 pl-8 pr-2 text-neutral-700 shadow code-font invisible w-0"
		bind:value={$searchQuery}
		bind:this={search}
		type="search"
		aria-label="Search"
		placeholder="Search"
	/>
	<div
		class="placeholder absolute top-1/2 -translate-y-1/2 left-8 text-neutral-600 pointer-events-none gap-1"
	>
		Type
		<span
			class="text-sm font-semibold rounded border-neutral-600 border px-1 pb-[1px] h-max leading-0"
			>/</span
		>
		to search
	</div>
</label>

<style>
	label {
		--animation: ease-in-out 200ms;

		display: block;
		min-width: 2rem;
	}

	label:has(:not(input[type='checkbox']:checked)) {
		cursor: pointer;
	}

	/* Search */

	.search {
		transition: width var(--animation);
	}

	.search::placeholder {
		opacity: 0;
	}

	input[type='checkbox']:checked ~ .search {
		visibility: visible;
		width: 300px;
	}

	/* Icon */
	.icon {
		transition: height var(--animation);
	}

	input[type='checkbox']:not(:checked) ~ .icon:hover {
		background-color: #3333;
	}

	input[type='checkbox']:checked ~ .icon {
		height: 1.25rem;
		padding: 0;
	}

	/* Placeholder */
	.placeholder {
		transition: opacity var(--animation);
		opacity: 1;
	}

	.search:not(:placeholder-shown) ~ .placeholder {
		display: none;
	}

	input[type='checkbox']:not(:checked) ~ .placeholder {
		opacity: 0;
	}

	@media (max-width: 640px) {
		.placeholder {
			display: none;
		}

		.search::placeholder {
			opacity: 1;
		}
	}
</style>

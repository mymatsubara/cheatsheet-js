<script lang="ts">
	import CheatSheet from '$lib/components/cheatsheet/CheatSheet.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>cheatsheet.js - Interactive javascript cheatsheet</title>
</svelte:head>

<Header />

<main class="mt-6 mb-12 flex flex-col gap-6 mx-auto px-3 sm:px-6">
	<CheatSheet sections={data.sections} />
</main>

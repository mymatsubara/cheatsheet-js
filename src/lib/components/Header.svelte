<script lang="ts">
	import GithubLink from '$lib/components/GithubLink.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
</script>

<header
	class="z-10 py-3 px-3 sm:px-6 bg-neutral-200 sticky top-0 flex items-center justify-between gap-2"
>
	<div class="flex gap-2 sm:gap-3 items-center">
		<img
			class="h-6 sm:h-10"
			src="/logo.svg"
			alt="cheatsheet.js logo - Interactive javascript cheatsheet"
		/>
		<h1
			class="hidden sm:block text-[0.5rem] leading-[0.5rem] logo-text sm:text-xs sm:leading-3 font-medium code-font"
		>
			Interactive javascript cheatsheet
		</h1>
	</div>
	<div class="flex sm:gap-4 items-center">
		<div class="hidden sm:block">
			<GithubLink />
		</div>
		<SearchBar />
	</div>
</header>

<style>
	.logo-text {
		word-spacing: 100vw;
		width: min-content;
	}
</style>

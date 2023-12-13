<script lang="ts">
	import { onMount } from 'svelte';
	import GithubIcon from './icons/GithubIcon.svelte';
	import LoaderIcon from './icons/LoaderIcon.svelte';

	let stars: number | undefined;

	onMount(async () => {
		stars = await getStars();
	});

	async function getStars(): Promise<number | undefined> {
		const response = await fetch('https://api.github.com/repos/mymatsubara/cheatsheet-js');
		const body = await response.json();

		return body?.stargazers_count;
	}
</script>

<a
	href="https://github.com/mymatsubara/cheatsheet-js"
	target="_blank"
	aria-label="Github repository"
	title="Github repository"
>
	<div class="flex gap-1 py-1 px-2 rounded items-center hover:bg-neutral-300">
		<GithubIcon class="h-6" />
		<div class="text-xs font-semibold rounded-sm bg-neutral-100 px-1 py-0.5 flex tracking-tighter">
			{#if stars !== undefined}
				{stars?.toLocaleString() ?? 0} ⭐
			{:else}
				<LoaderIcon class="h-4 animate-spin" />
			{/if}
		</div>
	</div>
</a>

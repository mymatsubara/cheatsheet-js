<script lang="ts">
	import CodeEditor from '$lib/components/CodeEditor.svelte';
	import type { Content } from '../../cheatsheet/parse';
	import ChevronDownIcon from '../icons/ChevronDownIcon.svelte';

	export let contents: Content[];
	export let title: string;

	export let open = false;
</script>

<div>
	<button
		class="w-full"
		on:click={() => {
			open = !open;
		}}
	>
		<div class="hover:bg-neutral-100 p-1.5 border-b border-neutral-200">
			<div class="flex justify-between items-center">
				<h3 class="text-left text-blue-700 font-semibold text-sm">
					{title}
				</h3>
				<div class="chevron">
					<ChevronDownIcon class="h-5 text-neutral-700 {open ? 'rotate-180' : ''} transition-all" />
				</div>
			</div>
		</div>
	</button>

	{#if open}
		<div>
			{#each contents as block}
				{#if block.type === 'code'}
					<div class="mb-3">
						<CodeEditor code={block.content} config={{ language: block.language }} />
					</div>
				{:else}
					<div class="prose my-3 px-3">
						{@html block.content}
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	/* Animate chevron rotation */
	.chevron {
		transition: rotate var(--animation);
	}

	label:has(input:checked) .chevron {
		rotate: 180deg;
	}
</style>

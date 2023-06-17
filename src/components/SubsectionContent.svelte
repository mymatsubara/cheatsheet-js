<script lang="ts">
	import CodeEditor from "./CodeEditor.svelte";
	import type { SubsectionData } from "./types";

	type Data = Pick<SubsectionData, "compiledContent" | "rawContent">;
	export let data: Data;

	const nodesData = getNodesData(data);

	type NodeData =
		| {
				type: "code";
				content: string;
		  }
		| {
				type: "text";
				content: string;
		  };

	function getNodesData(data: Data) {
		const raw = data.rawContent;
		const compiled = data.compiledContent;

		const rawCodePattern =
			/```(?<language>\w*)(\n)?(?<code>(?:(?!```).)*)(\n)+```/gs;
		const compiledCodePattern = /<pre.*?<\/pre>/gs;

		const codeBlocks = [...raw.matchAll(rawCodePattern)].map(
			(m) =>
				({
					...m.groups,
				} as { language?: string; code?: string })
		);
		const nonCodeBlocksCompiled = compiled.split(compiledCodePattern);

		const nodes = nonCodeBlocksCompiled.flatMap((nonCodeBlock, i) => {
			const result = [
				{ type: "text", content: nonCodeBlock },
			] as NodeData[];

			const codeBlock = codeBlocks[i];
			if (codeBlock) {
				const { code } = codeBlock;
				result.push({
					type: "code",
					content: code ?? ".md file parsed incorrectly",
				});
			}

			return result;
		});

		return nodes.filter((node) => node.content);
	}
</script>

<div class="flex flex-col gap-3">
	{#each nodesData as nodeData}
		{#if nodeData.type === "code"}
			<CodeEditor code={nodeData.content} />
		{:else}
			<div>
				{@html nodeData.content}
			</div>
		{/if}
	{/each}
</div>

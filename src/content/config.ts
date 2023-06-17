import { defineCollection, z } from "astro:content";
import { SectionName, languages } from "../lib/sections/declarations";

const subsection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().nonempty(),
	}),
});

export const collections = languages.reduce(
	(acc, language) => ({ ...acc, [language]: subsection }),
	{} as Record<SectionName, typeof subsection>
);

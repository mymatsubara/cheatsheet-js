import { z } from "astro:content";
import { languages, sections, subsections } from "./declarations";

export type Language = (typeof languages)[number];
export type SectionName = (typeof sections)[number];
export type Subsections = typeof subsections;
export type SubsectionName = Subsections[SectionName];

export const sectionIndex = sections.reduce(
	(acc, section, i) => ({
		...acc,
		[section]: i,
	}),
	{} as Record<SectionName, number>
);

export const subsectionIndex = Object.entries(subsections).reduce(
	(acc, [section, subsections]) => ({
		...acc,
		[section]: subsections.flat().reduce(
			(innerAcc, subsection, i) => ({
				...innerAcc,
				[subsection]: i,
			}),
			{} as SubsectionIndex
		),
	}),
	{} as Record<SectionName, SubsectionIndex>
);

type SubsectionIndex = Record<string, number>;

export const subsectionSchema = z
	.object({
		language: z.enum(languages),
		section: z.enum(sections),
		subsection: z.string(),
	})
	.refine(
		(o) => {
			const match = subsections[o.section]
				.flat()
				.find((subsection) => o.subsection === subsection);
			return !!match;
		},
		(o) => ({
			message: `Subsection '${o.subsection}' is not defined on section '${
				o.section
			}'. (available subsections: ${subsections[o.section]})`,
		})
	);

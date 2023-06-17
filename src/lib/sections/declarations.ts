import type { Language, SectionName } from "./helpers";

export const languages = ["en", "pt"] as const;
export const sections = ["string"] as const;

export const subsections = {
	string: ["declare", "combine"],
} as const satisfies SubsectionDeclaration;

export const sectionTitle = {
	pt: {
		string: "String",
	},
	en: {
		string: "String",
	},
} as const satisfies Record<Language, Record<SectionName, string>>;

type SubsectionDeclaration = Record<SectionName, Readonly<string[]>>;

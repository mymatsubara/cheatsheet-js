import type { Language, SectionName } from "./helpers";

export const languages = ["en", "pt"] as const;
export const sections = ["string", "basics"] as const;

export const subsections = {
	string: ["declare", "combine"],
	basics: ["print", "comments", "variables", "semicolon", "alert"],
} as const satisfies SubsectionDeclaration;

export const sectionTitle = {
	pt: {
		string: "String",
		basics: "Básico",
	},
	en: {
		string: "String",
		basics: "Basics",
	},
} as const satisfies Record<Language, Record<SectionName, string>>;

type SubsectionDeclaration = Record<SectionName, Readonly<string[]>>;

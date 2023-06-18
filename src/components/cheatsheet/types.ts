import type { Content } from "../../cheatsheet/parse";

export type CheatSheetData = { [section: string]: SectionData };
export type SectionData = { [subssection: string]: Content[] };

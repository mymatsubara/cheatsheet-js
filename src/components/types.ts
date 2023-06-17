export interface SectionData {
	index: number;
	title: string;
	subsections: SubsectionData[];
}

export interface SubsectionData {
	index: number;
	title: string;
	rawContent: string;
	compiledContent: string;
}

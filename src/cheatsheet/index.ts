import basics from "./en/basics.md?raw";
import string from "./en/string.md?raw";
import { parseCheatcheat } from "./parse";

export const content = parseCheatcheat({
	Basics: basics,
	String: string
});

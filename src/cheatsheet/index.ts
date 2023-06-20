import array from "./en/array.md?raw";
import basics from "./en/basics.md?raw";
import number from "./en/number.md?raw";
import string from "./en/string.md?raw";
import { parseCheatcheat } from "./parse";

export const content = parseCheatcheat({
	Basics: basics,
	String: string,
	Number: number,
	Array: array
});

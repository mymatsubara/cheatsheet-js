import array from "./en/array.md?raw";
import basics from "./en/basics.md?raw";
import boolean from "./en/boolean.md?raw";
import _class from "./en/class.md?raw";
import date from "./en/date.md?raw";
import errors from "./en/errors.md?raw";
import func from "./en/function.md?raw";
import generator from "./en/generator.md?raw";
import number from "./en/number.md?raw";
import object from "./en/object.md?raw";
import promise from "./en/promise.md?raw";
import string from "./en/string.md?raw";
import { parseCheatcheat } from "./parse";

export const content = parseCheatcheat({
	Basics: basics,
	String: string,
	Number: number,
	Boolean: boolean,
	Array: array,
	Function: func,
	Object: object,
	Class: _class,
	Date: date,
	Errors: errors,
	Promise: promise,
	Generator: generator
});

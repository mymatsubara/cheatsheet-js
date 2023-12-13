import { describe, expect, it } from "vitest";
import { escapeRegExp, trim, trimEnd, trimStart } from "./string";

describe("string helper", () => {
	it("trimStart", () => {
		const s = "abc abc abc";

		expect(trimStart(s, "g")).toBe("abc abc abc");
		expect(trimStart(s, "b")).toBe("abc abc abc");
		expect(trimStart(s, "a")).toBe("bc abc abc");
		expect(trimStart(s, "abc")).toBe(" abc abc");
		expect(trimStart(s, "cab")).toBe(" abc abc");
	});

	it("trimEnd", () => {
		const s = "abc abc abc";

		expect(trimEnd(s, "g")).toBe("abc abc abc");
		expect(trimEnd(s, "a")).toBe("abc abc abc");
		expect(trimEnd(s, "c")).toBe("abc abc ab");
		expect(trimEnd(s, "abc")).toBe("abc abc ");
		expect(trimEnd(s, "cab")).toBe("abc abc ");
	});

	it("trim", () => {
		const s = "abc abc abc";

		expect(trim(s, "g")).toBe("abc abc abc");
		expect(trim(s, "a")).toBe("bc abc abc");
		expect(trim(s, "c")).toBe("abc abc ab");
		expect(trim(s, "abc")).toBe(" abc ");
		expect(trim(s, "cab")).toBe(" abc ");
	});

	it("escapeRegExp", () => {
		const s = String.raw`All of these should be escaped: \ ^ $ * + ? . ( ) | { } [ ]`;

		expect(escapeRegExp(s)).toBe(
			String.raw`All of these should be escaped: \\ \^ \$ \* \+ \? \. \( \) \| \{ \} \[ \]`
		);
	});
});

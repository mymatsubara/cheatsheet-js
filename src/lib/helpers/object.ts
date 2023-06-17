export function trimEndNewLineInPlace<T extends object>(object: T) {
	for (const prop in object) {
		const value = object[prop];

		if (typeof value === "string") {
			object[prop] = value.replace(/[\r\n]+$/, "") as any;
		} else if (typeof value === "object") {
			trimEndNewLineInPlace(value as object);
		}
	}
}

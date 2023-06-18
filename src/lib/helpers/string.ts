export function trim(s: string, chars: string) {
	return trimEnd(trimStart(s, chars), chars);
}

export function trimStart(s: string, chars: string) {
	const pattern = RegExp(`^[${escapeRegExp(chars)}]+`);
	return s.replace(pattern, "");
}

export function trimEnd(s: string, chars: string) {
	const pattern = RegExp(`[${escapeRegExp(chars)}]+$`);
	return s.replace(pattern, "");
}

// From: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
export function escapeRegExp(s: string) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

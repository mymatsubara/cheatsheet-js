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

// From: https://gist.github.com/codeguy/6684588?permalink_comment_id=3332719#gistcomment-3332719
export function slugify(s: string) {
	return s
		.toString()
		.normalize("NFD") // split an accented letter in the base letter and the acent
		.replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-")
		.replace(/[^\w\-]+/g, "");
}

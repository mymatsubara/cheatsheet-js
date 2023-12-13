import { content } from '$lib/cheatsheet';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		sections: content
	};
};

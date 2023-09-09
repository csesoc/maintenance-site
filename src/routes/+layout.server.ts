import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = (p) => {
	console.log(p.url.pathname);
	if (p.url.pathname !== "/") throw redirect(307, "/");
};

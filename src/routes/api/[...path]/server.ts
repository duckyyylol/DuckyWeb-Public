import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ params, url }) => {
	return fetch(`https://ducky.wiki/${params.path + url.search}`);
};
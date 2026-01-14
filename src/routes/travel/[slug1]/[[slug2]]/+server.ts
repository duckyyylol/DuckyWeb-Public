import travels from "$lib/travels/travels";
import { redirect } from "@sveltejs/kit";

export const GET = async ({ params, url }): Promise<void> => {
    const slug1 = params.slug1;
    const slug2 = params.slug2;
    if (travels[slug1]) {
        let travel = travels[slug1];
        if (travel.slugs && slug2) {
            if (travel.slugs[slug2]) {
                redirect(302, travel.slugs[slug2].url)
            } else {
                redirect(302, travels[slug1].url);

            }
        } else {
            redirect(302, travels[slug1].url);
        }
    } else {
        redirect(302, `/404?from=${url.toString()}`)
    }
}
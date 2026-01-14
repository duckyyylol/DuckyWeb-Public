import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({request, url, fetch}) => {  
    return {
        nowPlaying: await (await fetch(`${url.protocol}//${url.hostname}/api/nowplaying`)).json(),
        userAgent: request.headers.get("user-agent")
    }
}
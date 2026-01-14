import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({request, fetch}) => {  
    return {
        nowPlaying: await (await fetch("/api/nowplaying")).json(),
        userAgent: request.headers.get("user-agent")
    }
}
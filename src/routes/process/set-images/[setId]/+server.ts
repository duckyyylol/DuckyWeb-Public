import { BG_API_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { removeBackgroundFromImageUrl, type RemoveBgResult } from "remove.bg";

function makeSetImagePath(setId: string): string {
    return join(process.cwd(), "src", "lib", "assets", "lego", `${setId}.${setId === "default" ? "png" : "webp"}`)
}

export const GET = async ({ params, fetch }): Promise<Response> => {
    if (!existsSync(makeSetImagePath(params.setId))) {
        let brickableResult = await (await fetch(`/api/lego/sets/${params.setId}`)).json();
        if (!brickableResult || !brickableResult.imageUrl) return json(JSON.stringify({ path: makeSetImagePath("default") }))
        let resultImage: RemoveBgResult = await removeBackgroundFromImageUrl({ apiKey: BG_API_KEY, url: brickableResult.imageUrl });
        if (!resultImage) return json(JSON.stringify({ path: makeSetImagePath("default") }))

        writeFileSync(makeSetImagePath(params.setId), Buffer.from(resultImage.base64img))

        return json(JSON.stringify({ path: makeSetImagePath(params.setId) }))
    } else {
        return json(JSON.stringify({ path: makeSetImagePath(params.setId) }))
    }
}
import { json } from '@sveltejs/kit'
import axios from 'axios';
import { Agent } from 'https'

export const GET = async (): Promise<Response> => {
    const res = await axios.get("https://api.ducky.wiki/music/nowplaying", {httpsAgent: new Agent({rejectUnauthorized: false})});
    const res_json = res.data;
    return json(res_json)
}
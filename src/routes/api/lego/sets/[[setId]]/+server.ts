import { json } from "@sveltejs/kit";
import axios from "axios";
import { Agent } from "https";

export const GET = async ({ params }) => {
    if (params.setId) {
        const res = await axios.get(`https://api.ducky.wiki/lego/sets/${params.setId}`, { httpsAgent: new Agent({ rejectUnauthorized: false }) });
        const res_json = res.data;
        return json(res_json)
    } else {
        const res = await axios.get("https://api.ducky.wiki/lego/sets", { httpsAgent: new Agent({ rejectUnauthorized: false }) });
        const res_json = res.data;
        let toReturn: any[] = [];
        for(const setId of res_json) {
            const legoSet = await axios.get(`https://api.ducky.wiki/lego/sets/${setId}`, { httpsAgent: new Agent({ rejectUnauthorized: false }) });
            // console.log(legoSet.data)
            toReturn.push(legoSet.data)
            console.log(toReturn)
        }
        
        return json(toReturn)
    }
}
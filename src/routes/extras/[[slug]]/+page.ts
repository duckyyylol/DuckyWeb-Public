import type { PageLoad } from "./$types";

export interface Brickable_LegoSet {
  id: string,
  rebrickableUrl: string,
  imageUrl: string,
  name: string,
  meta: {
    pieces: number,
    release_year: number,
    theme: number,
    skill_level: number
  }
}

export const load: PageLoad = async ({params, fetch, url}) => {
  let legoSets = [];
  if(params.slug && params.slug === "lego") {
    legoSets = await (await fetch(`/api/lego/sets`)).json()
    legoSets = await Promise.all(legoSets.map(async (ls: any) => ({...ls, imagePath: (await (await fetch(`/process/set-images/${ls.id}`)).json()).path})))
  }
    
    return {
        legoSets: (params.slug && params.slug === "lego") ? legoSets : [],
        slug: params.slug || null
    }
}
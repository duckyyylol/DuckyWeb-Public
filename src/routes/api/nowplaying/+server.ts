import { json } from '@sveltejs/kit'
import axios from 'axios';
import { Agent } from 'https'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400', // 24 hours
};

// Handle preflight OPTIONS request
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders
  });
}

export const GET = async (): Promise<Response> => {
    const res = await axios.get("https://api.ducky.wiki/music/nowplaying", {httpsAgent: new Agent({rejectUnauthorized: false})});
    const res_json = res.data;
    return json(res_json)
}
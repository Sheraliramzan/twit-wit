import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return res.status(405).end();
    }
    try{
        
    }catch(error){
        console.error(error);
        res.status(400).end();
    }
}
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return res.status(405).end();
    }
    try{
        const {currentUser} = await server
    }catch(error){
        console.error(error);
        res.status(400).end();
    }
}
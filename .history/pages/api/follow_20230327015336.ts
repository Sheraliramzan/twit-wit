import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).end();
    }

    try{
        const 
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}
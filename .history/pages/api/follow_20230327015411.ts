import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "swr/_internal";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).end();
    }

    try{
        const {userId} = req.body;

        const {currentUser} = await serialize
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}
import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).end();
    }

    try{
        const {userId} = req.body;

        const {currentUser} = await serverAuth(req);

        if(!userId || ){
            return res.status(400).end();
        }
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}
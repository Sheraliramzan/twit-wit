import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return res.status(405).end();
    }
    try{
        const {currentUser} = await serverAuth(req);
        const {body}
    }catch(error){
        console.error(error);
        res.status(400).end();
    }
}
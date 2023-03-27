import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }
    try{
        const {postId} = req.query;
        if(!postId || typeof postId !== 'string'){
            throw 
        }
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}
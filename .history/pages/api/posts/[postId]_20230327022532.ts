import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }
    try{
        const {postId} = req.query;
        if(!postId || typeof postId !== 'string'){
            throw new Error('Invalid post id');
        }

        const post = await prisma.post.findUnique
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}
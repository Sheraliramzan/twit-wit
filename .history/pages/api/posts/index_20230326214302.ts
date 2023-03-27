import { NextApiRequest, NextApiResponse } from 'next'
import serverAuth from '../../../libs/serverAuth';
import prisma from '../../../libs/prismadb';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).end();
    }
    try{
        if(req.method === 'POST') {
            const {currentUser} =  await serverAuth(req);
            const {body} = req.body

            const post = await prisma.post.create({
        }
    }catch(error){
        console.error(error);
        return res.status(400).end();
    }
}


import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../libs/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).json({message: 'Method not allowed'});
    }
    try{
        const { userId } = req.query;
       
        const (!userId || typeof userId !== 'string') {
            throw new Error('Invalid user id');
        }

        const exsitingUser = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        const followersCount = await prisma.user.count({
            where
        });
    }catch(error){
        console.log(error);
        return res.status(400).json({message: 'Internal server error'});
    }
}
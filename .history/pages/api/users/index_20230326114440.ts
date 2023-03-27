import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if (req.method !== 'GET') {
        res.status(405).json({message: 'Method not allowed'});
    }
    try{
       const users = await prisma.user.findMany({
        orderBy: {
            create
        }
       });
    }catch(error){
        console.log(error);
        res.status(400).json({message: 'Internal server error'});
    }
}
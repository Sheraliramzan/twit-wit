import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'GET'){
        res.status(405).json({message: 'Method not allowed'});
    }
    try{
        const { userId } = req.query;
       
        const (!userId || typeof userId !== 'string') {}
    }catch(error){
        console.log(error);
        res.status(400).json({message: 'Internal server error'});
    }
}
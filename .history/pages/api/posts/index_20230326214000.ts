import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).end();
    }
    try{

    }catch(error){
        console.error(error);
        return res.status(400).end();
    }
}


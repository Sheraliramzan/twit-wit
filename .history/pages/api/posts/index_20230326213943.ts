import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST' && req.method === 'GET') {
        return res.status(405).end();
    }
    try{

    }catch(error){
        cons
        return res.status(500).end();
    }
}


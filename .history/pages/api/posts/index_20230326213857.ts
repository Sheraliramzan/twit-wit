import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST' && req.method === 'GET') {
        return res.status(405)
    }
}


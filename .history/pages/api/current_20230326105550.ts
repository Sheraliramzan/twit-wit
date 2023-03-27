import { NextApiRequest, NextApiResponse } from 'next'
import { serverAuth } from '../../libs/serverauth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }
    try{
        const {currentUser} = await serverAuth(req);
    }catch(error){
        console.log(error)
        return res.status(400).json({ message: 'Internal server error' })
    }
}
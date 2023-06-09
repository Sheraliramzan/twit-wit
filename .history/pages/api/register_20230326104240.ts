import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }
    try{
        const { email, su password } = req.body
    }catch(error){
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
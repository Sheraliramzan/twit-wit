import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'R') {
        return res.status(405).json({ message: 'Method not allowed' })
    }
}
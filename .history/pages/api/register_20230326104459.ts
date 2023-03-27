import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }
    try{
        const { email, username, name, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({

        })
    }catch(error){
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
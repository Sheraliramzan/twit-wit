import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

const serverAuth = (req: NextApiRequest) =>{
    const session = await getSession({ req });

    if (!session?.user?.email) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}
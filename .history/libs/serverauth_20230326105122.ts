import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

imp

const serverAuth = async (req: NextApiRequest) =>{
    const session = await getSession({ req });

    if (!session?.user?.email) {
        throw new Error("Not authenticated");
    }

    const currentUser = await prisma.user.findUnique({
}
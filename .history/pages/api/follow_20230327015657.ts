import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../libs/serverAuth";
import prisma from "../../libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).end();
    }

    try{
        const {userId} = req.body;

        const {currentUser} = await serverAuth(req);

        if(!userId || typeof userId !== "string"){
            throw new Error("Invalid ID");
        }

        const user = await prisma.user.findUnique({
            where : {
                id : userId
            }
        });

        if
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}
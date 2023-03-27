import { NextApiRequest, NextApiResponse } from "next";
import { serverAuth } from "../../libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST' && req.method !== 'DELETE') {
        return res.status(405).end();
    }
        try {
            const { postId } = req.body;
        
            const { currentUser } = await serverAuth(req);
        
            if (!postId || typeof postId !== 'string') {
              throw new Error('Invalid ID');
            }
        
            const post = await prisma.post.findUnique({
              where: {
                id: postId
              }
        });
    
}
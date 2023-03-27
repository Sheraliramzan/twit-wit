import { NextApiRequest } from "next";
import { getSession } from "next-auth/client";

const serverAuth = (req: NextApiRequest) =>{
    const session = await getSession({ req });
}
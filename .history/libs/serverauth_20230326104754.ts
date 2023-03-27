import { NextApiRequest } from "next";
import { getSession } from "next-auth/reacy";

const serverAuth = (req: NextApiRequest) =>{
    const session = await getSession({ req });
}
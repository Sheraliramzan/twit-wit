import { NextApiRequest } from "next";

const serverAuth = (req: NextApiRequest) =>{
    const session = await getSession({ req });
}
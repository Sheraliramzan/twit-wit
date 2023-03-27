import { NextApiRequest } from "next";
i

const serverAuth = (req: NextApiRequest) =>{
    const session = await getSession({ req });
}
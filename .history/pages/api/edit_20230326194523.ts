import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "../../libs/serverAuth";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !=='PATCH'){
        return res.status(405).end();
    }
    try{
        const{currentUser} = await serverAuth(req);

        

    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}
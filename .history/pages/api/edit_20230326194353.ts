import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !=='PATCH'){
        return res.status(405).end();
    }
    try{

    }catch(error){
        console.log(error);
        res.status(400).e();
    }
}
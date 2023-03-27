import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if (req.method !== 'GET') {
        res.status(405).json({message: 'Method not allowed'});
    }
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        res.status(200).json(data);
    }
}
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method === 'GET'){
    res.status(200).json(process.env.REACT_APP_FIREBASE_CONFIG)
  } 
}
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const rawConfig = process.env.REACT_APP_FIREBASE_CONFIG

  if (!rawConfig) {
    return res.status(500).json({ error: 'REACT_APP_FIREBASE_CONFIG is not set' })
  }

  try {
    const parsedConfig = JSON.parse(rawConfig)
    return res.status(200).json(parsedConfig)
  } catch {
    return res.status(500).json({ error: 'Invalid REACT_APP_FIREBASE_CONFIG JSON' })
  }
}
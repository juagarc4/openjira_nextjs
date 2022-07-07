// IMPORTANT: DO NOT SEND THIS FILE TO ANY SERVER WITH VALUABLE DATA

import { db, seedData } from 'database'
import { Entry } from 'models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({
      message: 'Access to this endpüoint forbidden in production',
    })
  }

  await db.connect()
  await Entry.deleteMany()
  await Entry.insertMany(seedData.entries)
  await db.disconnect()

  res.status(200).json({
    message: 'Process executed successfully',
  })
}

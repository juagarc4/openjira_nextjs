import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error: boolean
  message: string | string[]
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { message = 'Something was wrong' } = req.query
  res.status(400).json({
    error: true,
    message,
  })
}

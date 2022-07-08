import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { db } from 'database'
import { Entry, IEntry } from 'models'

type Data = { message: string } | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `Given id ${id} is not valid a valid id` })
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res)
    default:
      return res.status(400).json({ message: `Method ${req.method} does not exist or is not implemented` })
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()

  const entryToUpdate = await Entry.findById(id)
  if (!entryToUpdate) {
    await db.disconnect()
    return res.status(400).json({ message: `Entry with id ${id} does not exist` })
  }
  const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body

  // runValidator: true => Executes validatos to check taht teh given data is allowed. For example: status in [pending, in-progress, finished]
  // new: true => Gives back the updated entry
  const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })
  // We already revied updatedEntry. Therefore it is secure to add a "!" to say TS,
  // that it will always recive a value
  return res.status(200).json(updatedEntry!)
}

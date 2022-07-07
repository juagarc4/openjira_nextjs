import { Entry } from 'interfaces'
import mongoose, { Model, Schema } from 'mongoose'

interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progres', 'finished'],
      message: '{VALUE} is not allowed as state',
    },
  },
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)
export default EntryModel

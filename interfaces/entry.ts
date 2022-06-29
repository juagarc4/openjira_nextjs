export interface Entry {
  _id: string
  description: string
  createdAt: number
  status: EntryStatus
}

// If it's not going to be expanded or extended, we use a type.
export type EntryStatus = 'pending' | 'in-progress' | 'finished'

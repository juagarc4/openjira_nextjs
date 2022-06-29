export interface Entry {
  _id: string
  description: string
  createdAt: number
  status: EntyStatus
}

// If it's not going to be expanded or extended, we use a type.
export type EntyStatus = 'pending' | 'in-progress' | 'finished'

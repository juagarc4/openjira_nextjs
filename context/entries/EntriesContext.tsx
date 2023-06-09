import { createContext } from 'react'
import { Entry } from 'interfaces'

interface ContextProps {
  entries: Entry[]
  addNewEntry: (description: string) => void
  deleteEntry: (id: string) => void
  updateEntry: (entry: Entry, showsnackBar?: boolean) => void
}

export const EntriesContext = createContext({} as ContextProps)

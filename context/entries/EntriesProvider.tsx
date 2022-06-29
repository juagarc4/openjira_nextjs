import { FC, ReactElement, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext, entriesReducer } from './'
import { Entry } from 'interfaces'

export interface EntriesState {
  entries: Entry[]
}
interface Props {
  children: ReactElement | ReactElement[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Default task',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Default task2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: 'Default task2',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>
}

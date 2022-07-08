import { FC, ReactElement, useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext, entriesReducer } from './'
import { Entry } from 'interfaces'
import { entriesApi } from 'apis'

export interface EntriesState {
  entries: Entry[]
}
interface Props {
  children: ReactElement | ReactElement[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    }
    dispatch({ type: '[Entry] - Add Entry', payload: newEntry })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Entry Updated', payload: entry })
  }

  //
  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] - Refresh Data', payload: data })
  }

  // We want only to execute this function once.
  // Therefor we do not neet any dependency.
  // We can however use the function refresEntries as dependncy if we want
  // but in this case we have to memoize the function
  useEffect(() => {
    refreshEntries()
  }, [])

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}

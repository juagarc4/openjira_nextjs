import { FC, ReactElement, useReducer, useEffect } from 'react'
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

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] - Add Entry', payload: data })
  }

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      // We can send the full entry, but if the object is really big, we can
      // overload the connection sending unnecessary data.
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      })
      dispatch({ type: '[Entry] - Entry Updated', payload: data })
    } catch (error) {
      console.log({ error })
    }
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

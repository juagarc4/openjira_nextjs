import { EntriesState } from './'

type EntriesActionType = { type: '[Entries] - Add Entry' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    // case '[Entries] - Add Entry':
    //   return {
    //     ...state,
    //   }

    default:
      return state
  }
}

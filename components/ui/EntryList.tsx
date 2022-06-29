import { FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './'
import { EntryStatus } from 'interfaces'
import { EntriesContext } from 'context/entries/EntriesContext'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext)

  // Memoized because i don't want fillter the array each time unless the entries change.
  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries])

  return (
    // TODO: Here we will do drop
    <div>
      <Paper
        sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}
      >
        {/* Change depending of we are doing drag or not */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}

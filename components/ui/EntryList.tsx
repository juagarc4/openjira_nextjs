import { FC, useContext, useMemo, DragEvent } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './'
import { EntryStatus } from 'interfaces'
import { EntriesContext } from 'context/entries'
import { UIContext } from 'context/ui'

import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)

  // Memoized because i don't want fillter the array each time unless the entries change.
  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries])

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('entry_id')

    // ! say to TS that the value will always be found
    const entry = entries.find((e) => e._id === id)!
    entry.status = status
    updateEntry(entry)
    endDragging()
  }

  return (
    // TODO: Here we will do drop
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ''}>
      <Paper
        sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}
      >
        {/* Change depending of we are doing drag or not */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}

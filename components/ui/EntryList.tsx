import { List, Paper } from '@mui/material'
import { EntryCard } from './'

export const EntryList = () => {
  return (
    // TODO: Here we will do drop
    <div>
      <Paper
        sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}
      >
        {/* Change depending of we are doing drag or not */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  )
}

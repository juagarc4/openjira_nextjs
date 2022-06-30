import { FC, DragEvent, useContext } from 'react'
import { Card, CardActions, CardActionArea, CardContent, Typography } from '@mui/material'

import { Entry } from 'interfaces'
import { UIContext } from 'context/ui'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext)
  const onDragStart = (event: DragEvent) => {
    // We can set the data to transfer
    event.dataTransfer.setData('entry_id', entry._id)
    // TODO: Change state to show i am doing Drag
    startDragging()
  }
  const onDragEnd = () => {
    // TODO: End of Drag
    endDragging()
  }
  return (
    <Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>30 Minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

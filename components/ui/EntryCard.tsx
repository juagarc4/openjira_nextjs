import { FC, DragEvent, useContext } from 'react'
import { useRouter } from 'next/router'
import { Card, CardActions, CardActionArea, CardContent, Typography } from '@mui/material'

import { Entry } from 'interfaces'
import { UIContext } from 'context/ui'
import { dateFunctions } from 'utils'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext)
  const router = useRouter()

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
  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  }
  return (
    <Card onClick={onClick} sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>
            {`Created ${dateFunctions.getFormatDistanceToNow(entry.createdAt)} ago`}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

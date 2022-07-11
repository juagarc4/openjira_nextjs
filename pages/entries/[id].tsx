import { ChangeEvent, FC, useMemo, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Layout } from 'components/layouts'
import { dbEntries } from 'database'
import { Entry, EntryStatus } from 'interfaces'
import { EntriesContext } from 'context/entries'
import { dateFunctions } from 'utils'

const validStauts: EntryStatus[] = ['pending', 'in-progress', 'finished']

interface Props {
  entry: Entry
}

const EntryPage: FC<Props> = ({ entry }) => {
  const router = useRouter()
  const { updateEntry, deleteEntry } = useContext(EntriesContext)

  const [inputValue, setInputValue] = useState(entry.description)
  const [status, setStatus] = useState<EntryStatus>(entry.status)
  const [touched, setTouched] = useState(false)

  // We memoize the result to avoid multiple executions of the same validation.
  const isNotValid = useMemo(() => inputValue.length === 0 && touched, [inputValue, touched])

  const onInputValuedChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    // We could put an if-statement to check the type of the value we receive,
    // but in this case we are sure that the type is EntryStatus,
    // therefore we can say it to TS
    setStatus(event.target.value as EntryStatus)
  }

  const onSave = () => {
    if (inputValue.trim().length === 0) return
    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    }

    updateEntry(updatedEntry, true)
    router.push('/')
  }

  const onDelete = () => {
    deleteEntry(entry._id)
    router.push('/')
  }

  return (
    <Layout title='Add/Edit entry'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entry: ${inputValue}`}
              subheader={`Created ${dateFunctions.getFormatDistanceToNow(entry.createdAt)} ago`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='New Entry'
                autoFocus
                multiline
                label='New Entry'
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={onInputValuedChanged}
                helperText={isNotValid && 'Entry a value'}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {validStauts.map((option) => (
                    <FormControlLabel key={option} value={option} control={<Radio />} label={capitalize(option)} />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
                onClick={onSave}
                // We don't win anything memoizing this value. It's already in a useState.
                disabled={inputValue.length === 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton onClick={onDelete} sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'red' }}>
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }

  const entry = await dbEntries.getEntryById(id)

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: { entry },
  }
}

export default EntryPage

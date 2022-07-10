import { ChangeEvent, useMemo, useState } from 'react'
import { Layout } from 'components/layouts'
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
import { EntryStatus } from 'interfaces'

const validStauts: EntryStatus[] = ['pending', 'in-progress', 'finished']

const EntryPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<EntryStatus>('pending')
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

  const onSave = () => {}
  return (
    <Layout title='....'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title={`Entry: ${inputValue}`} subheader={'Created: .... minutes ago'} />
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
      <IconButton sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'red' }}>
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  )
}

export default EntryPage

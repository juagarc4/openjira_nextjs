import { ChangeEvent, useState, useContext } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { EntriesContext } from 'context/entries/EntriesContext'
export const NewEntry = () => {
  const [isAddding, setIsAdding] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [touched, setITouched] = useState(false)
  const { addNewEntry } = useContext(EntriesContext)

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const onSave = () => {
    if (inputValue.length === 0) return
    addNewEntry(inputValue)
  }
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='New Entry'
            autoFocus
            multiline
            label='New Entry'
            helperText={inputValue.length <= 0 && touched && 'Add the text of your task'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanges}
            onBlur={() => setITouched(true)}
          />
          <Box display='flex' justifyContent='space-between'>
            <Button variant='text' onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
            <Button variant='outlined' color='primary' endIcon={<SaveOutlinedIcon />} onClick={onSave}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button startIcon={<AddCircleOutlinedIcon />} fullWidth variant='outlined' onClick={() => setIsAdding(true)}>
          Add Task
        </Button>
      )}
    </Box>
  )
}

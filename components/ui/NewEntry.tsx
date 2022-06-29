import { ChangeEvent, useState, useContext } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { EntriesContext } from 'context/entries'
import { UIContext } from 'context/ui/'
export const NewEntry = () => {
  const [inputValue, setInputValue] = useState('')
  const [touched, setITouched] = useState(false)
  const { addNewEntry } = useContext(EntriesContext)
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const onSave = () => {
    if (inputValue.length === 0) return
    addNewEntry(inputValue)
    setIsAddingEntry(false)
    setITouched(false)
    setInputValue('')
  }
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
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
            <Button variant='text' onClick={() => setIsAddingEntry(false)}>
              Cancel
            </Button>
            <Button variant='outlined' color='primary' endIcon={<SaveOutlinedIcon />} onClick={onSave}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlinedIcon />}
          fullWidth
          variant='outlined'
          onClick={() => setIsAddingEntry(true)}
        >
          Add Task
        </Button>
      )}
    </Box>
  )
}

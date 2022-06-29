import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      <Button startIcon={<AddCircleOutlinedIcon />} fullWidth variant='outlined'>
        Add Task
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder='New Entry'
        autoFocus
        multiline
        label='New Entry'
        helperText='Add the text of your task'
      />
      <Box display='flex' justifyContent='space-between'>
        <Button variant='text'>Cancel</Button>
        <Button variant='outlined' color='primary' endIcon={<SaveOutlinedIcon />}>
          Save
        </Button>
      </Box>
    </Box>
  )
}

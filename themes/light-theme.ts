import { createTheme, IconButton } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300],
    },
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'sticky',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#4a148c',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
})

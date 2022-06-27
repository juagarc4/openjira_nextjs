import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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

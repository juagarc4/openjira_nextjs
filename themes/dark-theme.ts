import { createTheme } from '@mui/material'
import { pink, red } from '@mui/material/colors'
import Main from 'next/document'

// Allowed items for palette
// primary
// secondary
// error
// warning
// info
// success

// Allowed attributes into each palete item
//   light?: string;
//   main: string;
//   dark?: string;
//   contrastText?: string;
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

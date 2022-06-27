import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const basicTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
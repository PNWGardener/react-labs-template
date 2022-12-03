import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      success: React.CSSProperties['color']
      warn: React.CSSProperties['color']
      danger: React.CSSProperties['color']
    }
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0078BF',
    },
    secondary: {
      main: '#3D5265',
    },
    error: {
      main: red[400],
    },
  },
})

export default theme

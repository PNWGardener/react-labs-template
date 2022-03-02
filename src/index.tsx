import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Typography } from '@mui/material'
import theme from './common/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TimerLab } from './examples/timer'
import { WordleLab } from './examples/wordle'
// import theme from '@common/theme'

const NoMatch: React.VFC = () => {
  return <Typography variant="h2">Not Found</Typography>
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/labs/timer" element={<TimerLab/>}>

            </Route>
            <Route path="/labs/wordle" element={<WordleLab/>}>
  
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
      
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

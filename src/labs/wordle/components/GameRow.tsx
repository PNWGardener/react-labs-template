import { Box } from '@mui/material'
import React from 'react'

export const GameRow: React.FC = (props) => {
  const { children } = props

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
      {children}
    </Box>
  )
}

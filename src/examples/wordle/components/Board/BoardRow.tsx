import { Box, SxProps } from '@mui/material'
import React from 'react'

export const BoardRow: React.FC<{sx?: SxProps}> = (props) => {
  const { children, sx } = props

  return (
    <Box
      sx={{ ...sx, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
    >
      {children}
    </Box>
  )
}

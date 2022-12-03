import { styled } from '@mui/material'
import React from 'react'

const BoardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

export const GameBoard: React.FC = (props) => {
  const { children } = props

  return (
    <BoardContainer sx={{ display: 'flex', flexDirection: 'column' }}>
      {children}
    </BoardContainer>
  )
}

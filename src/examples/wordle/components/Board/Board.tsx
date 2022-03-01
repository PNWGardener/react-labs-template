import { styled } from '@mui/material'
import React from 'react'

const BoardContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
})

const BoardGrid = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 'none',
})

export const Board: React.FC = (props) => {
  const { children: rows } = props
  const 
  return (
    <BoardContainer>
      <BoardGrid>{rows}</BoardGrid>
    </BoardContainer>
  )
}

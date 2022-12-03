import React from 'react'
import { Box, SxProps } from '@mui/system'
import { LetterStatus } from '../types'

export type TileStatus = LetterStatus | 'empty'

type Props = {
  letter?: string
  status?: TileStatus
}

type StyleStateMap = {
  [state in TileStatus]: SxProps
}

const tileStateOverrides: StyleStateMap = {
  correct: {
    borderColor: 'success.main',
    backgroundColor: 'success.main',
  },
  absent: {
    borderColor: 'grey.700',
    backgroundColor: 'grey.700',
  },
  empty: {
    borderColor: 'grey.700',
  },
  present: {
    borderColor: '#c9b458',
    backgroundColor: '#c9b458',
  },
}

export const GameTile: React.VFC<Props> = (props) => {
  const { letter, status: state = letter?.length ? 'absent' : 'empty' } = props
  const styleOverrides: SxProps = tileStateOverrides[state] ?? {}
  return (
    <Box
      sx={{
        color: '#fff',
        flex: 'none',
        textTransform: 'uppercase',
        margin: '8px',
        width: 64,
        height: 64,
        border: 2,
        borderColor: 'grey.700',
        fontSize: 32,
        lineHeight: '64px',
        ...styleOverrides,
      }}
    >
      {letter}
    </Box>
  )
}

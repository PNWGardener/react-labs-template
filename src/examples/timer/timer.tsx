import { Box, Button, Stack, styled, Typography } from '@mui/material'

import React from 'react'
import { useTimer } from '.'
import { Time } from './types'
import logo from '../../logo.svg'
import { Theme } from '@mui/material'

export type TimerProps = {
  displayFormat?: string
}

const TimeDisplay: React.FC = (props) => {
  const { children } = props
  return (
    <>
      <Typography color="GrayText" variant="body1" sx={{ fontSize: '48px' }}>
        {children}
      </Typography>
    </>
  )
}

const TimerImage = styled('img', {
  shouldForwardProp: (prop) =>
    ['src', 'isActive', 'size'].includes(prop.toString()),
})<{ isActive: boolean; size?: number }>(({ isActive = true, size = 300 }) => ({
  '@keyframes spinning-image': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  height: size,
  animation: 'spinning-image infinite 10s linear',
  animationPlayState: isActive ? 'running' : 'paused',
}))

export const Timer: React.VFC<TimerProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { displayFormat = 'hh:mm:ss' } = props
  const { time, isActive, start, pause, reset } = useTimer()

  const formatTime = ({ hours, minutes, seconds }: Time) => {
    const formattedParts = [hours, minutes, seconds].map((unit) =>
      String(unit).padStart(2, '0')
    )

    return formattedParts.join(':')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <TimerImage src={logo} isActive={isActive}></TimerImage>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <Stack direction="column" spacing={2} sx={{ display: 'flex' }}>
        {isActive ? (
          <Button variant="outlined" color="error" onClick={() => pause()}>
            Stop
          </Button>
        ) : (
          <Button variant="outlined" color="success" onClick={() => start()}>
            Start
          </Button>
        )}

        <Button variant="text" color="secondary" onClick={() => reset()}>Reset</Button>
      </Stack>
    </Box>
  )
}

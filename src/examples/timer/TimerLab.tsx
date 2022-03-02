import { Stack, styled } from '@mui/material'
import { Timer } from './timer'

const TimerContainer = styled('div')({
  flex: 'auto',
  flexFlow: 'column',
  position: 'relative',
})


export const TimerLab = () => {
  return (
    <Stack
      sx={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
    >
      <Timer></Timer>
    </Stack>
  )
}

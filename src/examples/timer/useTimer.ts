/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from 'react'
import { Time, UseTimer } from './types'
import useInterval from './useInterval'

const initialTime: Time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
}

export const useTimer = (options?: { autoStart?: boolean }): UseTimer => {
  const { autoStart = false } = options ?? {}
  const [time, setTime] = useState<Time>(initialTime)
  const [ticks, setTicks] = useState(0)
  const [isActive, setIsActive] = useState(autoStart)

  useInterval(() => {
    if (isActive) {
      setTicks((current) => current + 1)
    }
  })

  useEffect(() => {
    const hours = ~~(ticks / 3600)
    const minutes = ~~((ticks % 3600) / 60)
    const seconds = ~~ticks % 60

    setTime({ hours, minutes, seconds })
  }, [ticks])

  const pause = () => {
    setIsActive(false)
  }

  const start = () => {
    if (!isActive) {
      setIsActive(true)
    }
  }
  const reset = () => {
    setTicks(0)
    setIsActive(false)
  }

  return {
    time,
    isActive,
    pause,
    start,
    reset,
  }
}

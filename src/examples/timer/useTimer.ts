/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from 'react'
import { Time, UseTimer } from './types'
import useInterval from './useInterval'

const initialTime: Time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
}

export const useTimer = (): UseTimer => {
  const [time, setTime] = useState<Time>(initialTime)
  const [ticks, setTicks] = useState(0)
  const [isActive, setIsActive] = useState(true)

  useInterval(() => {
    if (isActive) {
      setTicks((current) => current + 1)
      // console.log('tick: ', ticks + 1)
    }
  })

  useEffect(() => {
    const hours = ~~(ticks / 3600)
    const minutes = ~~((ticks % 3600) / 60)
    const sec = ~~ticks % 60

    setTime({ hours, minutes, seconds: sec })
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
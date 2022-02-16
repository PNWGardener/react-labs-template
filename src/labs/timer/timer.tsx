import React, { useEffect, useRef, useState } from 'react'

/*****SET UP*****/
interface Time {
  seconds: number
  minutes: number
  hours: number
}
interface UseTimer {
  time: Time
  isTicking: boolean
  pause: () => void
  start: () => void
  reset: () => void
}

type TimerProps = {
  displayFormat?: string
}

const initialTime: Time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
}

function increment(callback: () => void, delay = 1000) {
  const savedCallBack = useRef(callback)
  //remember latest callback when it changes
  useEffect(() => {
    savedCallBack.current = callback
  }, [callback])

  //interval set up
  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }
    const interval = setInterval(() => savedCallBack.current(), delay)
    return () => clearInterval(interval)
  }, [delay])
}

/*****HOOK: SETS THE TIME ******/
const useTimer = (): UseTimer => {
  const [time, setTime] = useState<Time>(initialTime)
  const [ticks, setTicks] = useState(0)
  const [isTicking, setTicking] = useState(false)

  /* Increment Functionality */
  increment(() => {
    if (isTicking) {
      setTicks(ticks + 1)
      console.log(ticks)
    }
  })

  /*Calculating Hours, Mins, Secs Values */
  useEffect(() => {
    //seconds interval set by delay = 1000ms
    const seconds = ~~(ticks % 60)
    //convert seconds into hours and minutes
    const minutes = ~~((ticks % 3600) / 60)
    const hours = ~~(ticks / 3600)

    /* Set Time On Timer, Triggered Every Tick*/
    setTime({ hours, minutes, seconds })
  }, [ticks])

  /*Defining Each Button's Functionality */
  const start = () => {
    if (!isTicking) {
      setTicking(true)
    }
  }
  const pause = () => {
    setTicking(false)
  }
  const reset = () => {
    setTicks(0)
    setTicking(false)
  }

  return {
    time,
    isTicking,
    start,
    pause,
    reset,
  }
}

/* VIEW */
export const Timer: React.FC<TimerProps> = () => {
  const { time, isTicking, start, pause, reset } = useTimer()

  const formatTime = (time: Time) => {
    return `${time.hours.toString().padStart(2, '0')}:${time.minutes
      .toString()
      .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`
  }

  return (
    <>
      <div>
        <h1>Timer</h1>
        {formatTime(time)}
        <div>
          {!isTicking ? (
            <button onClick={() => start()}>Start</button>
          ) : (
            <button onClick={() => pause()}>Pause</button>
          )}
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </>
  )
}

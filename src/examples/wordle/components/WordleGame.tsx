import { Button, Snackbar, Stack, TextField } from '@mui/material'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Board, BoardRow, BoardTile } from './Board'
import { getLetters, getRandomWord } from '../utils'
import { LetterStatus } from '../types'
import { useGameDispatch, useGameState } from '../context'
import { Row, useGameBoard, useWordValidator } from '../hooks'
import { Keyboard } from './Keyboard'

export type Props = {
  words: string[]
}

const CompletedRow: React.VFC<{ row: Row }> = (props) => {
  const {
    row: { letters },
  } = props

  return (
    <BoardRow>
      {letters?.map((letter, index) => (
        <BoardTile key={index} letter={letter.value} status={letter.status} />
      ))}
    </BoardRow>
  )
}

const CurrentRow: React.VFC<{ input: string }> = ({ input }) => {
  const letters = getLetters(input)
  return (
    <BoardRow>
      <BoardTile letter={letters[0]} status='empty' />
      <BoardTile letter={letters[1]} status='empty' />
      <BoardTile letter={letters[2]} status='empty' />
      <BoardTile letter={letters[3]} status='empty' />
      <BoardTile letter={letters[4]} status='empty' />
    </BoardRow>
  )
}

const EmptyRow: React.VFC = () => {
  return (
    <BoardRow>
      <BoardTile />
      <BoardTile />
      <BoardTile />
      <BoardTile />
      <BoardTile />
    </BoardRow>
  )
}

type GameInputProps = {
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
}


export const WordleGame: React.VFC = () => {
  const [currentValue, setCurrentValue] = useState('')
  const validateWord = useWordValidator()
  const dispatch = useGameDispatch()
  const gameState = useGameState()
  const boardState = useGameBoard({ inputValue: currentValue })
  const [isGameWon, setIsGameWon] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)

  useEffect(() => {
    console.log('status: ', gameState.status)
    if (gameState.status == 'win') {
      alert('You win!!!')
    }
    else if(gameState.status == 'lose') {
      alert('YOU LOSE!')
    }
  }, [gameState.status])

  useEffect(() => {
    console.log(gameState)
  }, [gameState])

  const attemptWord = (word: string) => {
    const isValid = validateWord(word)
    // if invalid show message

    if (isValid) {
      dispatch({ type: 'ADD_GUESS', word })
      setCurrentValue('')
    } else {
      window.alert(`${word} is not a valid guess`)
    }
  }

  const handleInput = (letter: string) => {
    if (currentValue?.length < 5) {
      setCurrentValue((value) => value + letter)
    }
  }

  const handleDelete = () => {
    if (currentValue?.length > 0) {
      setCurrentValue((value) => value.slice(0, -1))
    }
  }

  return (
    <>
      <Snackbar></Snackbar>
      <Stack sx={{ height: '100%'}} spacing={2}>
        <Board>
          {boardState.completedRows.map((row, index) => (
            <CompletedRow key={index} row={row} />
          ))}
          <CurrentRow input={currentValue}></CurrentRow>
          {boardState?.emptyRows &&
            boardState.emptyRows.map((row, index) => <EmptyRow key={index} />)}
        </Board>
        <Keyboard
          sx={{ flex: 'auto' }}
          onLetter={(letter) => handleInput(letter)}
          onEnter={() => attemptWord(currentValue)}
          onDelete={() => handleDelete()} />
      </Stack>
    </>
  )
}

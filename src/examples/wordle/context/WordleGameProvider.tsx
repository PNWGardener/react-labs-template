import React, { useEffect, useReducer } from 'react'
import { LetterResult, GuessResult, GameStatus } from '../types'
import {
  compare,
  getLetters,
  getRandomWord,
  getLetterStatus,
  sanitizeWord,
} from '../utils'
import {
  GameAction,
  GameDispatchContext,
  GameState,
  GameStateContext,
} from './WordleGameContext'

const initialState: GameState = {
  isReady: false,
  isLocked: false,
  solution: '',
  status: 'inprogress',
  guesses: [],
}

const reset = (state: GameState) => {
  return { ...state, ...initialState }
}

const attemptGuess = (solution: string, word: string): GuessResult => {
  const isMatch = compare(solution, word)
  const letters = getLetters(sanitizeWord(word)).map(
    (letter, index): LetterResult => {
      const status = getLetterStatus(solution, letter, index)
      return {
        status,
        value: letter,
      }
    }
  )

  return { isMatch, letters }
}

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case 'NEW_GAME': {
      return { ...reset(state), solution: action.solution }
    }
    case 'ADD_GUESS': {
      const { word } = action
      const result = attemptGuess(state.solution, action.word)
      const status: GameStatus = result.isMatch ? 'win' : 'inprogress'
      return {
        ...state,
        ...{ status },
        guesses: [...state.guesses, { word, result }],
      }
    }
    default: {
      return { ...state }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {
  words: string[]
}

export const WordleGameProvider: React.FC<Props> = (props) => {
  const { words, children } = props
  // const { words, isFetching } = useFetchWordList()
  const solution = getRandomWord(words)
  const [game, dispatch] = useReducer(gameReducer, {
    ...initialState,
    solution,
  })

  return (
    <>
      <GameStateContext.Provider value={game}>
        <GameDispatchContext.Provider value={dispatch}>
          {children}
        </GameDispatchContext.Provider>
      </GameStateContext.Provider>
    </>
  )
}

import { Action, ActionDispatch } from '@common/types'
import React, { useContext } from 'react'
import { GameStatus, Guess, LetterStatus } from '../types'

export interface GameState {
  solution: string
  status: GameStatus
  isReady: boolean
  isLocked: boolean
  guesses: Guess[]
  results?: { word: string, results: LetterStatus[], isMatch: boolean }
}
// type Action<Type extends string> = { type: Type }

export type GameAction =
  | Action<'LOAD_WORDS'>
  | Action<'NEW_GAME', { solution: string }>
  | Action<'ADD_GUESS', { word: string }>
  | Action<'ADD_RESULT', { result: LetterStatus[] }>
  | Action<'SET_SOLUTION', { solution: string }>
  | Action<'SET_STATUS', { status: GameStatus }>
  | Action<'RESET_GAME'>

export type Dispatch = ActionDispatch<GameAction>
export const GameStateContext = React.createContext<GameState | undefined>(
  undefined
)
export const GameDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
)

export const useGameState = () => {
  const context = useContext(GameStateContext)
  if (context === undefined) {
    throw new Error('useGameState must be used within GameStateContext')
  }
  return context
}

export const useGameDispatch = () => {
  const context = useContext(GameDispatchContext)
  if (context === undefined) {
    throw new Error('useGameDispatch must be used within GameDispatchContext')
  }
  return context
}

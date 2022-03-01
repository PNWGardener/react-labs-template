import { useEffect, useState } from 'react'
import { useGameState } from '../context'
import { LetterResult } from '../types'
import { compare } from '../utils'
import { useWordValidator } from './useWordValidator'

export interface GameBoardState {
  rowIndex: number
  completedRows: Row[]
  currentRow: Row
  emptyRows: Row[]
  rows: Row[]
}

export interface Row {
  word: string
  letters?: LetterResult[]
}

const makeEmptyRows = (count: number) => {
  return count > 0
    ? Array.from(Array(count)).map<Row>(() => ({
        word: '',
      }))
    : []
}

const MAX_CHALLENGES = 6

export const useGameBoard = (props: { inputValue: string }): GameBoardState => {
  const { inputValue } = props
  const { guesses } = useGameState()
  const [rowIndex, setRowIndex] = useState(0)
  const [completedRows, setCompletedRows] = useState<Row[]>([])
  const [emptyRows, setEmptyRows] = useState<Row[]>([])
  const [currentRow, setCurrentRow] = useState<Row>({ word: '' })

  // TODO: Clean up processing
  useEffect(() => {
    if (guesses.length == completedRows.length) {
      return
    }

    const rows = guesses.map(
      ({ word, result }): Row => ({
        word,
        letters: result?.letters,
      })
    )
    setRowIndex(rows.length)
    setCompletedRows(rows)
  }, [guesses])

  useEffect(() => {
    if (compare(inputValue, currentRow.word)) {
      return
    }

    currentRow.word != inputValue && setCurrentRow({ word: inputValue })
  }, [inputValue])

  useEffect(() => {
    const count = MAX_CHALLENGES - rowIndex - 1
    setEmptyRows(makeEmptyRows(count))
  }, [rowIndex])

  return {
    rowIndex,
    completedRows,
    currentRow,
    emptyRows,
    rows: [...completedRows, currentRow, ...emptyRows],
  }
}

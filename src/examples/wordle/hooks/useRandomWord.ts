import { useCallback, useEffect, useState } from 'react'
import { useWordList } from './useWordList'
import { getRandomWord } from '../utils'

export const useRandomWord = () => {
  const [randomWord, setRandomWord] = useState<string>()
  const { words = [], refresh: refreshData } = useWordList()

  // When word list is populated pick a random word
  useEffect(() => {
    if (!randomWord) {
      words && setRandomWord(getRandomWord(words))
    }
  }, [words])

  const refresh = useCallback(() => {
    words && setRandomWord(getRandomWord(words))
  }, [words])

  return { randomWord, refresh }
}

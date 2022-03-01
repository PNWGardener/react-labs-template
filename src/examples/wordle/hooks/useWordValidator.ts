import { useCallback } from 'react'
import { sanitizeWord } from '../utils'
import { useWordList } from './useWordList'

export const useWordValidator = () => {
  const { words = [] } = useWordList()

  const validate = useCallback(
    (word: string) => {
      return word?.length == 5 && words.includes(sanitizeWord(word))
    },
    [words]
  )

  return validate
}

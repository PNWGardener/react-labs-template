import { LetterStatus } from '../types'

/**
 * Convert @word into array of characters (letters)
 * @param word
 * @returns array of characters
 */
export const getLetters = (word: string) => [...word]

export const checkLetters = (
  solution: string,
  guess: string
): LetterStatus[] => {
  const results = getLetters(guess).map((letter, index) =>
    getLetterStatus(solution, letter, index)
  )

  return results
}

export const getLetterStatus = (
  solution: string,
  letter: string,
  index: number
): LetterStatus => {
  if (solution?.length < index) {
    return 'absent'
  }
  const currentLetter = solution.charAt(index)
  if (letter === currentLetter) {
    return 'correct'
  } else if (solution.includes(letter)) {
    return 'present'
  } else {
    return 'absent'
  }
}

export const compare = (solution: string, word: string) =>
  sanitizeWord(solution) === sanitizeWord(word)

/**
 * Sanitize a word for comparison
 * @param word word to be sanitized
 * @returns string
 */
export const sanitizeWord = (word = '') => {
  return word.trim().toLowerCase()
}
/**
 * Get a random words from a list
 *
 * @param list List of words
 * @returns random word
 */
export const getRandomWord = (list: string[]): string => {
  const wordList = list ?? []

  const index = Math.floor(Math.random() * wordList.length)
  return wordList[index]
}

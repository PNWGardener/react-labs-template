import { LetterResult, LetterResults, LetterStatus, WordAttempt, WordAttempts } from '../types'

export const letterResult = (
  letter: string,
  status: LetterStatus
): LetterResult => ({ letter, status })
export const correct = (letter: string) => letterResult(letter, 'correct')
export const absent = (letter: string) => letterResult(letter, 'absent')
export const present = (letter: string) => letterResult(letter, 'present')

export const attempt = (word: string, attemptedWord: string): WordAttempt => {
  const result = checkWord(word, attemptedWord) as LetterResults

  return {
    isMatch: result.every((letter) => letter.status == 'correct'),
    word: attemptedWord,
    result,
  }
}

export const toWordAttempts = (attempts: WordAttempt[]) => {
  const wordAttempts: WordAttempts = [
    attempts.at(0),
    attempts.at(1),
    attempts.at(2),
    attempts.at(3),
    attempts.at(4),
    attempts.at(5),
  ]

  return wordAttempts
}

export const toLetterResults = (results: LetterResult[]) => {
  return results as LetterResults
}

export const checkWord = (word: string, attemptedWord: string) => {
  const currentWord = word.toLowerCase()
  const attemptedLetters = letters(attemptedWord.toLowerCase())
  const result = attemptedLetters.map((letter, index) =>
    checkLetter(currentWord, letter, index)
  )

  console.log(word, attemptedWord, result)

  return result as LetterResults
}

export const checkLetter = (word: string, letter: string, index: number) => {
  if (word?.length < index) {
    return absent(letter)
  }

  const currentLetter = word.charAt(index)
  if (letter === currentLetter) {
    return correct(letter)
  } else if (word.includes(letter)) {
    return present(letter)
  } else {
    return absent(letter)
  }
}

export const letters = (word: string) => [...word]

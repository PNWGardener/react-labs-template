export type LetterStatus = 'absent' | 'correct' | 'present'

export type LetterResult = {
  letter: string
  status: LetterStatus
}

export type LetterResults = [
  LetterResult,
  LetterResult,
  LetterResult,
  LetterResult,
  LetterResult
]

export type WordAttempt = {
  word: string
  isMatch: boolean
  result: LetterResults
}

export type WordAttempts = [
  WordAttempt?,
  WordAttempt?,
  WordAttempt?,
  WordAttempt?,
  WordAttempt?,
  WordAttempt?
]

export type GameResult = 'win' | 'lose'

export interface GameState {
  currentWord: string
  result?: GameResult
  attempts: WordAttempts
}

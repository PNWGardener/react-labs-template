

export type GameStatus = 'inprogress' | 'win' | 'lose'
export type LetterStatus = 'absent' | 'correct' | 'present'
export type LetterResult = {
  value: string
  status: LetterStatus
}

export interface GameOptions {
  wordSize: number
  maxAttempts: number
}

export type Guess = {
  word: string
  result?: GuessResult
}

export type GuessResult = {
  letters: LetterResult[]
  isMatch: boolean
}

export interface GameAttempt {
  word: string
  letters: string[]
  result: LetterStatus[]
  isMatch: boolean
}

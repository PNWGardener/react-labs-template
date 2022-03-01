export type GameStatus = 'inprogress' | 'win' | 'lose'
export type MatchStatus = 'absent' | 'correct' | 'present'

export type WordResult = MatchStatus[]

export type GameAttempt = {
  word: string
  result: WordResult
}

export interface GameOptions {
  maxAttempts: number
}

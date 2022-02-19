# Worldle Lab 
The following lab will focus on using theReact Context API and the `react-query` lib to manage state and actions for a Wordle like game.  A game in which a user will get 6 attempts to guess a random 5-letter word that is selected from a given data source.

## Summary
The `WordleLab` will function similar to Wordle without the custom keyboard.  Instead there will be a textfield that a user types their guess into.  The word entered will be validated to make sure the word is 5 characters long and matches one of the words in the word data source.  If the word is invalid an error message will inform the user that the word is invalid.  If it is a valid attempt the word will be checked against the current selected word and the result will be displayed in the row of boxes that are associated with their current attempt.  Each box will contain a letter of the guessed word and will show whether the letter was a match (green box), was somewhere else in the word (yellow box) or not in the word (gray box).

When the user guesses the correct word they will be shown a success message with a button to play again.  Otherwise, if the user goes through all of their attempts without guessing the word, the user will be shown a failure message with a button to try again.

If a user decides to play (or try) again the game will be reset and a new random word will be chosen.

## Criteria
- Use `react-query` to fetch a list of possible words.  The words can come from a local file or from an external data source.
- A random word must be selected from the word list at the beginning of each game
- The game state and actions should be manage using react context API.
  - The `GameStateContext` is used to store the current state of the game
  - The `GameDispatchContext` is used to dispatch actions with `useReducer` and update the state.
- Custom hooks should be created to interact with the state and dispatch context.
  - ex. `useWordleState` and `useWordleDispatch`
- Attempted values are required to be 5 letters long and be in the word list
- If an attempted word is not valid, a message should be displayed to the user and an attempt is not added to state
- Each attempt will display on the board with a visual indicator whether each letter is `correct`, `present` or `absent`.
- If the word is guessed correctly, the user has won and will be displayed a message
- After 6 attempts, if the word is not guessed correctly the user has lost and will be displayed a message
### Optional
- The game should keep track of the current attempt and display the letters as the user types them.
- Allow for a user to play again after the game is over (win or lose)

## Guidelines
### Getting the Word List
The only requirement is for `react-query` to be used to manage the word list in state.  The best way to do this is to utilize the `useQuery` hook provided inside of a custom hook.

> JSON Word List: [https://ostreactlabs.blob.core.windows.net/ostreactlabscdn/wordle/words.json]()

*Note: In order to use `useQuery` a `QueryClientProvider` needs to be within context for the hook to work.

Below is an example of how this could be done.

```typescript
// in App.tsx
const queryClient = new QueryClient()

export const App: React.VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WordleLab></WordleLab>
    </QueryClientProvider>
  )
}

// in hook
export const useFetchWordList = () => {
  // hard coded
  const result = useQuery<string[]>('words', () => ['react'])
  // fetched
  const fetchResult = useQuery<string[]>('words', () => fetch('https://ostreactlabs.blob.core.windows.net/ostreactlabscdn/wordle/words.json').then ((response) => response.json()))

  return fetchResult
}
```

### Getting a Random Word
The recommended way to get a random word from the list would be to create a custom hook.  The hook would use the `useFetchWordList` hook to get the possible words and then get a random word from the list.  The hooks should return an addition function as well to refresh the word.

Below is an example of how this could be done.
```typescript
export const useRandomWord = () => {
  const result = useFetchWordList()
  const [wordList, setWordList] = useState<string>()
  const [randomWord, setRandomWord] = useState<string>()

  useEffect(() => {
    const data = result?.data
    data && setWordList(data)
  }, [result.data])

  // When word list is populated pick a random word
  useEffect(() => {
    if (!randomWord) {
      getRandomWord()
    }
  }, [wordList])

  const getRandomWord = useCallback(() => {
    if (Boolean(wordList?.length)) {
      const [min, max] = [0, wordList.length - 1]
      const index = Math.random() * (max - min) + min
      setRandomWord(wordList[index])
    }
  }, [wordList])

  return { randomWord, refresh: getRandomWord }
}
```
### Validating an Attempted Word
### Managing State With React Context
### Parsing an Attempted Word

## Steps
- Create a custom hook `useFetchWordList` that uses `react-query` to fetch a list of words to use for the game
- Create a custom hook that uses the the `useFetchWordList` hook and returns a random word from the list
- Create a game input component that only allows 5 letter words that are in the word list.  The component will contain a button to attempt a word.
- When a word is attempted, use the built-in utilities to parse the word and return the results

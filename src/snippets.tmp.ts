export const flexLayout = (direction: 'column' | 'row', wrap = false) => {
  return {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  }
}


// const WordInput: React.VFC<GameInputProps> = (props) => {
//   const { onChange, onSubmit } = props

//   const onValueChange = (value: string) => {
//     if (value?.length <= 5) {
//       setValue(value)
//       onChange && onChange(value)
//     }
//   }

//   const submitWord = (word: string): void => {
//     if (word.length == 5) {
//       setValue('')
//       onSubmit && onSubmit(word)
//     }
//   }

//   const [value, setValue] = useState('')

//   return (
//     <>
//       <Stack spacing={2} direction="row">
//         <TextField
//           sx={{ flex: '1 1 auto' }}
//           hiddenLabel
//           name="word"
//           value={value}
//           onChange={(ev) => onValueChange(ev.target.value)}
//           id="filled-hidden-label-small"
//           placeholder="Enter Word"
//           variant="filled"
//         />
//         <Button
//           onClick={() => submitWord(value)}
//           color="primary"
//           variant="contained"
//         >
//           Guess
//         </Button>
//       </Stack>
//     </>
//   )
// }

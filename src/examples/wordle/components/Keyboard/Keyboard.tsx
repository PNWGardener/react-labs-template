import { Stack, SxProps, Theme } from '@mui/material'
import { Key } from './Key'

type Props = {
  sx?: SxProps<Theme>
  onEnter: () => void
  onLetter: (letter: string) => void
  onDelete: () => void
}

const KeyboardRow: React.FC = ({ children }) => (
  <Stack direction="row" sx={{ justifyContent: 'center' }}>
    {children}
  </Stack>
)

export const Keyboard: React.VFC<Props> = (props) => {
  const { onEnter, onLetter, onDelete, sx } = props
  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onLetter(value)
    }
  }
  return (
    <Stack sx={sx} direction="column">
      <KeyboardRow>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <Key value={key} key={key} onClick={onClick} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
          <Key value={key} key={key} onClick={onClick} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
          <Key value={key} key={key} onClick={onClick} />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </KeyboardRow>
    </Stack>
  )
}

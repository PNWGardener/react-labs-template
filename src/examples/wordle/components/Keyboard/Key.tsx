import { Box } from '@mui/system'
import { LetterStatus } from '../../types'

type Props = {
  value: string
  width?: number
  status?: LetterStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key: React.FC<Props> = (props) => {
  const { children, width = 48, value, onClick } = props

  const handleClick: React.MouseEventHandler = (event) => {
    onClick(value)
  }

  return (
    <Box
      sx={{
        flex: 'none',
        textTransform: 'uppercase',
        backgroundColor: 'grey.700',
        margin: '4px',
        height: 64,
        minWidth: width,
        border: 'none',
        appearance: 'none',
        borderRadius: '4px',
        borderColor: 'grey.700',
        lineHeight: '64px',
        alignItems: 'center',
        fontSize: '14px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      component="button"
      onClick={handleClick}
    >
      {children ?? value}
    </Box>
  )
}

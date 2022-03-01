export const flexLayout = (direction: 'column' | 'row', wrap = false) => {
  return {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  }
}

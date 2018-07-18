const indent = (marginTop: number, marginBottom?: number) => ({
  marginTop,
  marginBottom: marginBottom === undefined ? marginTop : marginBottom,
  '&:first-child': {
    marginTop: 0,
  },
  '&:last-child': {
    marginBottom: 0,
  },
})

export default indent

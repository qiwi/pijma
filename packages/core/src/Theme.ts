export default interface Theme {
  font: {
    family: string
  },
  color: {
    brand: string
    white: string
    black: string
    gray: {
      darkest: string
      dark: string
      normal: string
      light: string
      lightest: string
    }
    error: string
    success: string
  }
}

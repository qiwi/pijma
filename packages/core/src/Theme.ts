export default interface Theme {
  scale: number,
  font: {
    family: string
    weight: {
      normal: number
      strong: number
      bold: number
      heavy: number
    }
  }
  stub: {
    color: string
    animation: string
    radius: number
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

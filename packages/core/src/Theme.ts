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
  colors: {
    default: string
    service: string
    inverse: string
    success: string
    error: string
    warning: string
  }
  transition: {
    fast: string
    mean: string
    slow: string
  }
}

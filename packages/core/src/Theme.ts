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
  typo: {
    color: {
      default: string
      support: string
      inverse: string
      success: string
      failure: string
      warning: string
    }
  }
  transition: {
    fast: string
    mean: string
    slow: string
  }
}

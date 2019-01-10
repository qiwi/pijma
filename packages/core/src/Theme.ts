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
  placeholder: {
    color: string,
    animation: string
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

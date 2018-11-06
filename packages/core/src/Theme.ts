import {TypoColor, TypoWeight, TypoSize} from './primitive'

export default interface Theme {
  font: {
    family: string
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
    fontSize: {
      [size in TypoSize]: number
    }
    fontWeight: {
      [weight in TypoWeight]: number
    }
    lineHeight: {
      [size in TypoSize]: number
    }
    compactLineHeight: {
      [size in TypoSize]: number
    }
    color: {
      [color in TypoColor]: string
    }
  }
  transition: {
    fast: string
    mean: string
    slow: string
  }
}

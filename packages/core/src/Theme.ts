import '@emotion/react'

declare module '@emotion/react' {

  export interface Theme {
    scale: number
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
  }

}

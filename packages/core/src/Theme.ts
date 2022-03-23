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
    button: {
      bg: {
        kind: {
          brand: string
          simple: string
        }
        hover: {
          brand: string
          simple: string
        }
        accent: {
          brand: string
          simple: string
        }
      }
      border: {
        kind: {
          brand: string
          simple: string
        }
        hover: {
          brand: string
          simple: string
        }
      }
      shadow: {
        kind: {
          brand: string
          simple: string
        }
        hover: {
          brand: string
          simple: string
        }
      }
      text: {
        color: {
          brand: string
          simple: string
        }
      }
    },
    link: {
      color: {
        brand: {
          default: string
          hover: string
        }
        inverse: {
          default: string
          hover: string
        }
      }
    },
    tabs: {
      icon: {
        color: {
          default: string
          select: string
          hover: string
        }
      }
      text: {
        color: {
          default: string
          select: string
          hover: string
        }
      }
      border: {
        color: string
      }
    },
    input: {
      border: {
        disabled: string
        default: string
        focused: string
        error: string
      }
    }
  }

}

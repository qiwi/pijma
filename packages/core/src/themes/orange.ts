import Theme from '../Theme'

export const orange: Theme = {
  scale: 4,
  font: {
    family: '\'Museo Sans\', \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
    weight: {
      normal: 300,
      strong: 500,
      bold: 700,
      heavy: 900,
    },
  },
  color: {
    brand: '#ff8c00',
    white: '#fff',
    black: '#000',
    gray: {
      darkest: '#666',
      dark: '#999',
      normal: '#ccc',
      light: '#e6e6e6',
      lightest: '#f5f5f5',
    },
    error: '#d0021b',
    success: '#4bbd5c',
  },
  breakpoints: {
    xxl: {
      width: 1920,
      indents: 370,
      content: 1180,
    },
    xl: {
      width: 1440,
      indents: 130,
      content: 1180,
    },
    l: {
      width: 1280,
      indents: 50,
      content: 1180,
    },
    m: {
      width: 1024,
      indents: 40,
      content: 944,
    },
    s: {
      width: 600,
      indents: 36,
      content: 528,
    },
    xs: {
      width: 360,
      indents: 16,
      content: 328,
    },
    xxs: {
      width: 320,
      indents: 0,
      content: 320,
    },
  },
}

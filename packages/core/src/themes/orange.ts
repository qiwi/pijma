import {Theme} from '../styled'

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
  button: {
    bg: {
      kind: {
        brand: '#ff8c00',
        simple: '#fff padding-box',
      },
      hover: {
        brand: '#ff8200',
        simple: '#fff padding-box',
      },
      accent: {
        brand: 'linear-gradient(to bottom, #ff9810, #ff8300)',
        simple: '#fff padding-box',
      },
    },
    border: {
      kind: {
        brand: 'none',
        simple: '1px solid rgba(0, 0, 0, 0.14)',
      },
      hover: {
        brand: 'none',
        simple: '1px solid rgba(0, 0, 0, 0.28)',
      },
    },
    shadow: {
      kind: {
        brand: '0 15px 50px -10px rgb(255, 206, 135)',
        simple: '0 15px 50px -10px rgba(0, 0, 0, 0.15)',
      },
      hover: {
        brand: '0 25px 50px -10px rgb(255, 206, 135)',
        simple: '0 25px 50px -10px rgba(0, 0, 0, 0.15)',
      },
    },
    text: {
      color: {
        brand: '#fff',
        simple: '#000',
      },
    },
  },
  link: {
    color: {
      brand: {
        default: '#0055BB',
        hover: '#FF8C00',
      },
      inverse: {
        default: '#FFF',
        hover: '#CCC',
      },
    },
  },
  tabs: {
    icon: {
      color: {
        default: '#666',
        select: '#ff8c00',
        hover: '#ff8c00',
      },
    },
    text: {
      color: {
        default: '#666',
        select: '#000',
        hover: '#ff8c00',
      },
    },
    border: {
      color: '#ff8c00',
    },
  },
  input: {
    border: {
      disabled: '1px dotted #999',
      default: '1px solid rgba(0, 0, 0, 0.2)',
      focused: '2px solid #ff8c00',
      error: '2px solid #d0021b',
    },
  },
}

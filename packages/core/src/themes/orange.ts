import Theme from '../Theme'
import {keyframes} from 'emotion'

const stub = keyframes({
  '0%': {
    opacity: 0.04,
  },
  '50%': {
    opacity: 0.10,
  },
  '100%': {
    opacity: 0.04,
  },
})

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
  stub: {
    color: '#000',
    radius: 1,
    animation: `${stub} 1800ms ease-in-out infinite`,
  },
}

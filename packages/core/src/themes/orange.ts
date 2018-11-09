import {Theme} from '@qiwi/pijma-core'

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
  typo: {
    color: {
      default: '#000',
      support: '#666',
      inverse: '#fff',
      success: '#4bbd5c',
      failure: '#d0021b',
      warning: '#ff8c00',
    },
  },
  transition: {
    fast: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    mean: 'all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    slow: 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
}

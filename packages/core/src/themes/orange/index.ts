import {Theme} from '@qiwi/pijma-core'

import * as input from './input'

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
  card: {
    shadow: {
      z1: '0 1px 2px 0 rgba(0, 0, 0, 0.12)',
      z2: '0 8px 16px 0 rgba(0, 0, 0, 0.12)',
      z3: '0 16px 32px 4px rgba(0, 0, 0, 0.16)',
      z4: '0 20px 64px 8px rgba(0, 0, 0, 0.16)',
      f1: '0 1px 2px 0 rgba(0, 0, 0, 0.12)',
      f2: '0 0 16px 0 rgba(0, 0, 0, 0.12)',
      f3: '0 0 32px 0 rgba(0, 0, 0, 0.16)',
      f4: '0 0 64px 0 rgba(0, 0, 0, 0.16)',
    },
    background: {
      content: '#fff',
      layout: '#f5f5f5',
      backdrop: 'rgba(255, 255, 255, 0.96)'
    },
    border: {
      content: '1px solid #e6e6e6',
      layout: '1px solid #ccc',
    },
  },
  input,
}

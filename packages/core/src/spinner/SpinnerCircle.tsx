import React from 'react'
import {keyframes} from 'emotion'

import styled from '../styled'
import StyledComponent from '../StyledComponent'
import Theme from '../Theme'

const animation = keyframes({
  '0%': {
    strokeDasharray: '1, 200',
    strokeDashoffset: 0,
  },
  '50%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: -35,
  },
  '100%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: -124,
  },
})

const SpinnerCircle: StyledComponent<{}, JSX.IntrinsicElements['circle'], Theme> = styled('circle')({
  fill: 'none',
  stroke: '#000',
  strokeDasharray: '89, 200',
  strokeDashoffset: 0,
  strokeLinecap: 'round',
  strokeWidth: 4,
  animation: `${animation} 1500ms ease-in-out infinite`,
})

SpinnerCircle.defaultProps = {
  cx: 48,
  cy: 48,
  r: 20,
}

export default SpinnerCircle

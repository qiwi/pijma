import React, {FunctionComponent} from 'react'
import {keyframes} from 'emotion'

import styled from '../styled'

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const progress = keyframes({
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

const SpinnerMain = styled('svg')({
  width: 24,
  height: 24,
  transformOrigin: 'center center',
  animation: `${rotate} 2000ms linear infinite`,
})

const SpinnerCircle = styled('circle')({
  transition: 'stroke 333ms ease-in-out',
  animation: `${progress} 1500ms ease-in-out infinite`,
})

const Spinner: FunctionComponent = () => (
  <SpinnerMain viewBox="24 24 48 48" focusable="false">
    <SpinnerCircle
      cx="48"
      cy="48"
      r="20"
      fill="none"
      strokeDasharray="89, 200"
      strokeDashoffset="0"
      strokeLinecap="round"
      strokeWidth="4"
    />
  </SpinnerMain>
)

export default Spinner

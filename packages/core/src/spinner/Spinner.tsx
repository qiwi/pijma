import React, {FunctionComponent} from 'react'

import {keyframes} from '../styled'
import {Svg, Circle, Value} from '../primitive'

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

export interface SpinnerProps {
  width?: Value
  height?: Value
  color?: string
  paused?: boolean
}

const Spinner: FunctionComponent<SpinnerProps> = (props) => (
  <Svg
    viewBox="24 24 48 48"
    width={props.width}
    height={props.height}
    transformOrigin="center center"
    animation={props.paused ? undefined : `${rotate} 2000ms linear infinite`}
    children={(
      <Circle
        cx="48"
        cy="48"
        r="20"
        fill="none"
        stroke={props.color}
        strokeDasharray="89, 200"
        strokeDashoffset="0"
        strokeLinecap="round"
        strokeWidth="4"
        transition="stroke 333ms ease-in-out"
        animation={props.paused ? undefined : `${progress} 1500ms ease-in-out infinite`}
      />
    )}
  />
)

Spinner.displayName = 'Spinner'

export default Spinner

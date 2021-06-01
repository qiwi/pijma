import React, {FunctionComponent} from 'react'

import {Card, CardOptions, Pos} from '../primitive'
import styled, {keyframes} from '../styled'

const rotate = keyframes({
  '100%': {
    transform: 'rotateZ(360deg)',
  },
})

const CardPos = styled(Card, CardOptions)().withComponent(Pos)

interface ClockProps {
  width?: number
  height?: number
  color?: string
  r?: number
}

const Clock: FunctionComponent<ClockProps> = ({
    width = 10,
    height = 10,
    color = '#FFB800',
    r = 20,
  }) => (
  <CardPos type="relative" width={width} height={height} r={r} bg={color}>
    <CardPos
      type="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      width="4px"
      height="4px"
      r="50%"
      bg="#fff"
    />
    <CardPos
      type="absolute"
      top="20%"
      left={(width - 1) / 2}
      width="4px"
      height="30%"
      bg="#fff"
      r={2}
      transformOrigin="50% 100%"
      animation={`${rotate} 24000ms linear infinite`}
    />
    <CardPos
      type="absolute"
      top="20%"
      left={(width - 1) / 2}
      width="4px"
      height="30%"
      bg="#fff"
      r={2}
      transformOrigin="50% 100%"
      animation={`${rotate} 2000ms linear infinite`}
    />
  </CardPos>
)

export default Clock

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
  size?: number
  bg?: string
}

const Clock: FunctionComponent<ClockProps> = ({size= 10, bg = '#FFB800'}) => (
  <CardPos type="relative" width={size} height={size} r={size * 2} bg={bg}>
    <CardPos
      type="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      width={`${size / 10 * 4}px`}
      height={`${size / 10 * 4}px`}
      r="50%"
      bg="#fff"
    />
    <CardPos
      type="absolute"
      top="20%"
      left={(size - size / 10) / 2}
      width={`${size / 10 * 4}px`}
      height="30%"
      bg="#fff"
      rtr={`${size / 20 * 4}px`}
      rtl={`${size / 20 * 4}px`}
      transformOrigin="50% 100%"
      animation={`${rotate} 24000ms linear infinite`}
    />
    <CardPos
      type="absolute"
      top="20%"
      left={(size - size / 10) / 2}
      width={`${size / 10 * 4}px`}
      height="30%"
      bg="#fff"
      rtr={`${size / 20 * 4}px`}
      rtl={`${size / 20 * 4}px`}
      transformOrigin="50% 100%"
      animation={`${rotate} 2000ms linear infinite`}
    />
  </CardPos>
)

export default Clock

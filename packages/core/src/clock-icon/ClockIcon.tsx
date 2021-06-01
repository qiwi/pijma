import React, {FunctionComponent} from 'react'

import {Card, CardOptions, Pos} from '../primitive'
import styled, {keyframes} from '../styled'

const rotate = keyframes({
  '100%': {
    transform: 'rotateZ(360deg)',
  },
})

const CardPos = styled(Card, CardOptions)().withComponent(Pos)

const ClockIcon: FunctionComponent = () => (
  <CardPos type="relative" width={10} height={10} r={20} bg="#FFB800">
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
      left="18px"
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
      left="18px"
      width="4px"
      height="30%"
      bg="#fff"
      r={2}
      transformOrigin="50% 100%"
      animation={`${rotate} 2000ms linear infinite`}
    />
  </CardPos>
)

export default ClockIcon

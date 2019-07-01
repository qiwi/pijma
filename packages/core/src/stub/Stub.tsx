import React, {FC} from 'react'

import {keyframes} from '../styled'
import {Card, Box, Pos, Value} from '../primitive'

const stubKeyframes = keyframes({
  '0%': {
    backgroundPositionX: '-200px',
  },
  '100%': {
    backgroundPositionX: '360px',
  },
})

export interface StubProps {
  width: Value
  height: Value
  inverse?: boolean
  top?: Value
  bottom?: Value
  left?: Value
  right?: Value
}

const CardPos = Card.withComponent(Pos)

export const Stub: FC<StubProps> = (props) => (
  <Box
    pt={props.top}
    pb={props.bottom}
    pl={props.left}
    pr={props.right}
  >
    <CardPos
      type="relative"
      r={props.width === props.height ? '50%' : '4px'}
      overflow="hidden"
      bg={props.inverse ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.04)'}
      width={props.width}
      height={props.height}
    >
      <CardPos
        width="100%"
        height="100%"
        bg={`
          linear-gradient(
            to right,
            transparent 0,
            ${props.inverse ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}  80px,
            transparent 160px,
            transparent 560px
          )
          0 0 / 560px 100%
          repeat
        `}
        animation={`${stubKeyframes} 1400ms linear infinite`}
        css={{
          pointerEvents: 'none',
        }}
      />
    </CardPos>
  </Box>
)

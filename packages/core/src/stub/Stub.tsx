import React, {FC} from 'react'

import styled, {keyframes} from '../styled'
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
  r?: Value
}

const CardPos = styled(Card)().withComponent(Pos)

export const Stub: FC<StubProps> = (props) => (
  <Box
    as="span"
    pt={props.top}
    pb={props.bottom}
    pl={props.left}
    pr={props.right}
    width={props.width}
    height={props.height}
    maxWidth={1}
    maxHeight={1}
    css={{
      boxSizing: 'content-box',
    }}
  >
    <CardPos
      as="span"
      type="relative"
      r={props.r}
      overflow="hidden"
      bg={props.inverse ? 'rgba(255, 255, 255, 0.14)' : '#E6E6E6'}
      width={1}
      height={1}
    >
      <CardPos
        as="span"
        width={1}
        height={1}
        bg={`
          linear-gradient(
            to right,
            transparent 0,
            ${props.inverse ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'} 80px,
            transparent 160px,
            transparent 560px
          )
          0 0 / 560px 100%
          repeat
        `}
        animation={`${stubKeyframes} 1400ms linear infinite`}
      />
    </CardPos>
  </Box>
)

Stub.defaultProps = {
  r: 4,
}

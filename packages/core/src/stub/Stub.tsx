import React, {FC} from 'react'
import {keyframes} from 'emotion'

import {Card, Box, Pos, Value} from '../primitive'

const stubKeyframes = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(120vw)',
  },
})

export interface StubProps {
  inverse?: boolean
  top?: Value
  bottom?: Value
  left?: Value
  right?: Value
  width?: Value
  height?: Value
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
      overflow="hidden"
      zIndex={1}
      r={props.width === props.height ? '50%' : 4}
      width={props.width}
      height={props.height}
    >
      <CardPos
        type="fixed"
        top={0}
        right={0}
        bottom={0}
        zIndex={0}
        width="220vw"
        height="100%"
        bg={props.inverse ? (
          'linear-gradient(to right, rgba(255,255,255,0.14), rgba(255,255,255,0.14) 100vw, rgba(255,255,255,0.2) 110vw, rgba(255,255,255,0.14) 120vw, rgba(255,255,255,0.14))'
        ) : (
          'linear-gradient(to right, rgba(0,0,0,0.04), rgba(0,0,0,0.04) 100vw, rgba(0,0,0,0.1) 110vw, rgba(0,0,0,0.04) 120vw, rgba(0,0,0,0.04))'
        )}
        animation={`${stubKeyframes} 1400ms linear infinite`}
        css={{
          pointerEvents: 'none',
        }}
      />
    </CardPos>
  </Box>
)

Stub.defaultProps = {

}

import React, {FC} from 'react'
import {keyframes} from 'emotion'
import {Card, Box} from '../primitive'

const stubKeyframes = keyframes({
  '0%': {
    opacity: 0.04,
  },
  '50%': {
    opacity: 0.10,
  },
  '100%': {
    opacity: 0.04,
  },
})

export interface StubProps {
  bg?: string
  r?: number
  pt?: number
  pb?: number
  width?: number
  height?: number
  animation?: string
}

export const Stub: FC<StubProps> = (props) => {
  return (
    <Box pt={props.pt} pb={props.pb}>
      <Card
        animation={props.animation}
        bg={props.bg}
        height={props.height}
        width={props.width}
        r={props.r}
      />
    </Box>
  )
}

Stub.defaultProps = {
  bg: '#000',
  r: 4,
  pt: 1,
  pb: 1,
  animation: `${stubKeyframes} 1800ms ease-in-out infinite`,
}

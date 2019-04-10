import {keyframes} from 'emotion'
import styled from '../styled'

import {Card, CardProps, CardNonProps} from './Card'

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

export interface StubProps extends CardProps {
}

export const StubNonProps = CardNonProps

export const Stub = styled(Card, {
  shouldForwardProp: (prop) => !StubNonProps.includes(prop),
})<StubProps>()

Stub.defaultProps = {
  bg: '#000',
  r: 4,
  animation: `${stubKeyframes} 1800ms ease-in-out infinite`,
}

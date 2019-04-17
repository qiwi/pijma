import {keyframes} from 'emotion'
import styled from '../styled'

import {Card, CardProps, CardNonProps} from './Card'

const stubKeyframes = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(120vw)',
  },
})

export interface StubProps extends CardProps {
}

export const StubNonProps = CardNonProps

export const Stub = styled(Card, {
  shouldForwardProp: (prop) => !StubNonProps.includes(prop),
})<StubProps>((props) => ({
  overflow: 'hidden',
  position: 'relative',
  background: 'none',
  zIndex: 0,
  ':before': {
    content: '""',
    display: 'block',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '220vw',
    pointerEvents: 'none',
    maskImage: 'linear-gradient(to right, rgba(255,255,255,0.04), rgba(255,255,255,0.04) 100vw, rgba(255,255,255,0.1) 110vw, rgba(255,255,255,0.04) 120vw, rgba(255,255,255,0.04))',
    background: props.bg,
    backgroundRepeat: 'no-repeat',
    animation: `${stubKeyframes} 1300ms linear infinite`,
  },
}))

Stub.defaultProps = {
  r: 4,
  bg: '#000',
}

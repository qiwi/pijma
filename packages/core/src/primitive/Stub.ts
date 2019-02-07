import styled from '../styled'

import {pxValue} from './Value'

export interface StubProps {
  width?: number
  height?: number
  color?: string
  radius?: number
  animation?: string
}

export const StubNonProps = ['width', 'height', 'radius', 'animation', 'color']

export const Stub = styled('div', {
  shouldForwardProp: (prop) => !StubNonProps.includes(prop),
})<StubProps>(({theme, ...props}) => ({
  animation: theme.stub.animation,
  backgroundColor: props.color || theme.stub.color,
  display: 'block',
  width: pxValue(props.width, theme.scale),
  height: pxValue(props.height, theme.scale),
  borderRadius: pxValue(props.radius || theme.stub.radius, theme.scale),
}))

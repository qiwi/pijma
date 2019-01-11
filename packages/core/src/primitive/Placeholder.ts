import styled from '../styled'

import {pxValue} from './Value'

export interface PlaceholderProps {
  width?: number
  height?: number
  color?: string
  radius?: number
  animation?: string
}

export const PlaceholderNonProps = ['width', 'height', 'radius', 'animation', 'color']

export const Placeholder = styled('div', {
  shouldForwardProp: (prop) => !PlaceholderNonProps.includes(prop),
})<PlaceholderProps>(({theme, ...props}) => ({
  animation: theme.placeholder.animation,
  backgroundColor: props.color || theme.placeholder.color,
  display: 'block',
  width: pxValue(props.width, theme.scale),
  height: pxValue(props.height, theme.scale),
  borderRadius: pxValue(props.radius || theme.placeholder.radius, theme.scale),
}))

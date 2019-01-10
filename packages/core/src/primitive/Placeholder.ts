import styled from '../styled'

import {pxValue} from './Value'

export interface PlaceholderProps {
  width?: number
  height?: number
  color?: string
  borderRadius?: number
  animation?: string
}

export const PlaceholderNonProps = ['width', 'height', 'borderRadius', 'animation', 'color']

export const Placeholder = styled('div', {
  shouldForwardProp: (prop) => !PlaceholderNonProps.includes(prop),
})<PlaceholderProps>(({theme, ...props}) => ({
  animation: theme.placeholder.animation,
  backgroundColor: props.color || theme.placeholder.color,
  display: 'block',
  width: pxValue(props.width, theme.scale),
  height: pxValue(props.height, theme.scale),
  borderRadius: pxValue(props.borderRadius, theme.scale),
}))

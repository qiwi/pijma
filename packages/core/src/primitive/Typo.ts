import styled from '../styled'

import {pxValue} from './Value'

export interface TypoProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: number
  height?: number
  weight?: number
  color?: string
  transform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  nowrap?: boolean
  spacing?: number
  transition?: string
}

export const TypoNonProps = ['display', 'size', 'height', 'weight', 'color', 'transform', 'nowrap', 'spacing', 'transition']

export const Typo = styled('div', {
  shouldForwardProp: (prop) => !TypoNonProps.includes(prop),
})<TypoProps>(({theme, ...props}) => ({
  display: props.display,
  fontFamily: theme.font.family,
  fontSize: pxValue(props.size, theme.scale),
  fontWeight: props.weight,
  lineHeight: pxValue(props.height, theme.scale),
  color: props.color,
  textTransform: props.transform,
  letterSpacing: pxValue(props.spacing),
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: props.nowrap ? 'nowrap' : undefined,
  wordWrap: 'break-word',
  transition: props.transition,
}))

import styled, {CSSObject} from '../styled'

import {pxValue} from './Value'

export interface TypoProps {
  as?: keyof JSX.IntrinsicElements
  css?: CSSObject
  display?: 'block' | 'inline' | 'inline-block'
  size?: number
  height?: number
  weight?: number
  color?: string
  transform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  nowrap?: boolean
  spacing?: number
  transition?: string
  decoration?: 'line-through' | 'overline' | 'underline' | 'none'
  cursor?: string
  align?: 'center' | 'justify' | 'left' | 'right' | 'inherit'
}

export const TypoNonProps = ['as', 'css', 'innerRef', 'ref', 'display', 'size', 'height', 'weight', 'color', 'transform', 'nowrap', 'spacing', 'transition', 'decoration', 'cursor', 'align']

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
  textDecoration: props.decoration,
  cursor: props.cursor,
  textAlign: props.align,
}), (props) => props.css)

import styled, {CSSObject, StyledOptions} from '../styled'

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
  align?: 'center' | 'justify' | 'left' | 'right'
  cursor?: string
  clamp?: number
}

export const TypoNonProps = ['as', 'css', 'innerRef', 'ref', 'display', 'size', 'height', 'weight', 'color', 'transform', 'nowrap', 'spacing', 'transition', 'decoration', 'cursor', 'align', 'clamp']

export const TypoOptions: StyledOptions = {
  shouldForwardProp: (prop) => !TypoNonProps.includes(prop as string),
}

export const Typo = styled('div', TypoOptions)<TypoProps>(({theme, ...props}) => ({
  display: ([] as string[]).concat(props.display || [], props.clamp !== undefined && props.display === 'block' && props.height !== undefined ? '-webkit-box' : []),
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
  overflowWrap: 'break-word',
  transition: props.transition,
  textDecoration: props.decoration,
  textAlign: props.align,
  cursor: props.cursor,
  maxHeight: props.clamp !== undefined && props.height !== undefined && props.display === 'block' ? pxValue(props.height * props.clamp, theme.scale) : undefined,
  WebkitLineClamp: props.clamp !== undefined && props.height !== undefined && props.display === 'block' ? props.clamp : undefined,
  WebkitBoxOrient: props.clamp !== undefined && props.height !== undefined && props.display === 'block' ? 'vertical' : undefined,
}), (props) => props.css)

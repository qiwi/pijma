import styled from '../styled'

import {pxValue} from './Value'

export type TypoDisplay = 'block' | 'inline' | 'inline-block'

export type TypoSize = 't1' | 't2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'caption' | 'normal' | 'accent' | 'assist'

export type TypoWeight = 'thin' | 'light' | 'normal' | 'bold' | 'heavy'

export type TypoColor = 'default' | 'service' | 'inverse' | 'error' | 'success' | 'warning'

export type TypoTransform = 'lowercase' | 'uppercase' | 'capitalize' | 'none'

export interface TypoProps {
  display?: TypoDisplay
  size?: TypoSize
  weight?: TypoWeight
  color?: TypoColor
  transform?: TypoTransform
  compact?: boolean
  nowrap?: boolean
  spacing?: number
  transition?: 'slow' | 'mean' | 'fast'
}

const shouldForwardProp = (prop: string) => !['display', 'size', 'weight', 'color', 'transform', 'compact', 'nowrap', 'spacing', 'transition'].includes(prop)

export const Typo = styled('span', {
  shouldForwardProp,
})<TypoProps>((props) => ({
  display: props.display,
  fontSize: props.size === undefined ? undefined : pxValue(props.theme.typo.fontSize[props.size]),
  fontWeight: props.weight === undefined ? undefined : props.theme.typo.fontWeight[props.weight],
  lineHeight: props.size === undefined ? undefined : pxValue(props.compact ? props.theme.typo.compactLineHeight[props.size] : props.theme.typo.lineHeight[props.size]),
  color: props.color === undefined ? undefined : props.theme.typo.color[props.color],
  textTransform: props.transform,
  letterSpacing: props.spacing === undefined ? undefined : pxValue(props.spacing),
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: props.nowrap ? 'nowrap' : undefined,
  wordWrap: 'break-word',
  transition: props.transition === undefined ? undefined : props.theme.transition[props.transition],
}))

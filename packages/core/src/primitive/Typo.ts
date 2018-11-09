import styled from '../styled'
import Theme from '../Theme'

import {pxValue} from './Value'

export interface TypoProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: number
  height?: number
  weight?: keyof Theme['font']['weight']
  color?: keyof Theme['typo']['color']
  transform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  nowrap?: boolean
  spacing?: number
  transition?: keyof Theme['transition']
}

const shouldForwardProp = (prop: string) => !['display', 'size', 'height', 'weight', 'color', 'transform', 'nowrap', 'spacing', 'transition'].includes(prop)

export const Typo = styled('span', {
  shouldForwardProp,
})<TypoProps>(({theme, display, size, height, weight, color, transform, nowrap, spacing, transition}) => ({
  display: display,
  fontSize: pxValue(size, theme.scale),
  lineHeight: pxValue(height, theme.scale),
  fontWeight: weight === undefined ? undefined : theme.font.weight[weight],
  color: color === undefined ? undefined : theme.typo.color[color],
  textTransform: transform,
  letterSpacing: pxValue(spacing),
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: nowrap ? 'nowrap' : undefined,
  wordWrap: 'break-word',
  transition: transition === undefined ? undefined : theme.transition[transition],
}))

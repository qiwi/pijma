import React, {FunctionComponent} from 'react'

import {Breaker, Typo, TypoProps} from '@qiwi/pijma-core'

export interface TextProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse' | 'failure' | 'success' | 'warning'
  decoration?: TypoProps['decoration']
  transform?: TypoProps['transform']
  transition?: TypoProps['transition']
  align?: TypoProps['align']
  clamp?: number
}

const TextSize: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 3.5,
  m: 4,
  l: 5,
}

const TextHeight: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 5,
  m: 6,
  l: 8,
}

const TextHeightCompact: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 4,
  m: 5,
  l: 7,
}

const TextColor: { [color in NonNullable<TextProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
  success: '#4bbd5c',
  failure: '#d0021b',
  warning: '#ff8c00',
}

export const Text: FunctionComponent<TextProps> = ({display, compact, size, bold, color, decoration, transform, transition, align, clamp, children}) => (
  <Typo
    as="span"
    display={display}
    size={size === undefined ? undefined : TextSize[size]}
    height={size === undefined ? undefined : compact ? TextHeightCompact[size] : TextHeight[size]}
    weight={bold === undefined ? undefined : bold ? 500 : 300}
    color={color === undefined ? undefined : TextColor[color]}
    decoration={decoration}
    transform={transform}
    transition={transition}
    align={align}
    clamp={clamp}
    children={<Breaker children={children}/>}
  />
)

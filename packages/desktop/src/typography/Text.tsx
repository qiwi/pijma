import React, {FunctionComponent} from 'react'

import {Typo, TypoProps, Placeholder, Box} from '@qiwi/pijma-core'

export interface TextProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse' | 'failure' | 'success' | 'warning'
  decoration?: TypoProps['decoration']
  transition?: TypoProps['transition']
  transform?: TypoProps['transform']
  placeholder?: boolean
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

const PlaceholderOffset: { [size in NonNullable<TextProps['size']>]: {top: number, bottom: number} } = {
  s: {top: 2, bottom: 1},
  m: {top: 1, bottom: 2},
  l: {top: 3, bottom: 2},
}

const PlaceholderOffsetCompact: { [size in NonNullable<TextProps['size']>]: {top: number, bottom: number} } = {
  s: {top: 1, bottom: 1},
  m: {top: 1, bottom: 1},
  l: {top: 3, bottom: 1},
}

const PlaceholderHeight: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 2,
  m: 3,
  l: 3,
}

const TextColor: { [color in NonNullable<TextProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
  success: '#4bbd5c',
  failure: '#d0021b',
  warning: '#ff8c00',
}

export const Text: FunctionComponent<TextProps> = ({display, compact, size, bold, color, decoration, transform, transition, placeholder, children}) => {
  if (placeholder) {
    const placeholderSize = size || 'm'
    const offset = compact ? PlaceholderOffsetCompact[placeholderSize] : PlaceholderOffset[placeholderSize]
    const placeholderColor = color === 'inverse' ? TextColor.inverse : TextColor.default
    return (
      <Box pt={offset.top} pb={offset.bottom}>
        <Placeholder height={PlaceholderHeight[placeholderSize]} width={75} color={placeholderColor}/>
      </Box>
    )
  }
  return (
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
      children={children}
    />
  )
}

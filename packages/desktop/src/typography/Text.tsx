import React, {FunctionComponent} from 'react'

import {Typo, TypoProps, Stub, Box} from '@qiwi/pijma-core'

export interface TextProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse' | 'failure' | 'success' | 'warning'
  decoration?: TypoProps['decoration']
  transition?: TypoProps['transition']
  transform?: TypoProps['transform']
  stub?: boolean
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

const StubOffsetTop: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 2,
  m: 1,
  l: 3,
}

const StubOffsetBottom: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 1,
  m: 2,
  l: 2,
}

const StubOffsetCompactTop: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 1,
  m: 1,
  l: 3,
}

const StubOffsetCompactBottom: { [size in NonNullable<TextProps['size']>]: number } = {
  s: 1,
  m: 1,
  l: 1,
}

const StubHeight: { [size in NonNullable<TextProps['size']>]: number } = {
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

const StubColor: { [color in NonNullable<TextProps['color']>]: string } = {
  default: '#000',
  support: '#000',
  inverse: '#fff',
  success: '#000',
  failure: '#000',
  warning: '#000',
}

export const Text: FunctionComponent<TextProps> = ({display, compact, size, bold, color, decoration, transform, transition, stub, children}) => (
  stub ? (
    <Box
      pt={compact ? StubOffsetCompactTop[size || 'm'] : StubOffsetTop[size || 'm']}
      pb={compact ? StubOffsetCompactBottom[size || 'm'] : StubOffsetBottom[size || 'm']}
    >
      <Stub
        height={StubHeight[size || 'm']}
        width={75}
        bg={color === undefined ? StubColor.default : StubColor[color]}
      />
    </Box>
  ) : (
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
)

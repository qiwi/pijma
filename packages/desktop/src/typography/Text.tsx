import React, {FunctionComponent} from 'react'

import {Breaker, Stub, Typo, TypoProps, Box} from '@qiwi/pijma-core'

export interface TextProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse' | 'failure' | 'success' | 'warning'
  decoration?: TypoProps['decoration']
  transition?: TypoProps['transition']
  transform?: TypoProps['transform']
  align?: TypoProps['align']
  clamp?: number
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

const StubHeight: Record<NonNullable<TextProps['size']>, number> = {
  s: 2,
  m: 3,
  l: 3,
}
const StubOffsetTop: Record<NonNullable<TextProps['size']>, number> = {
  s: 1.5,
  m: 1.5,
  l: 2.5,
}

const StubOffsetBottom: Record<NonNullable<TextProps['size']>, number> = {
  s: 1.5,
  m: 1.5,
  l: 2.5,
}

const StubOffsetCompactTop: Record<NonNullable<TextProps['size']>, number> = {
  s: 1,
  m: 1,
  l: 2,
}

const StubOffsetCompactBottom: Record<NonNullable<TextProps['size']>, number> = {
  s: 1,
  m: 1,
  l: 2,
}

const TextColor: { [color in NonNullable<TextProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
  success: '#4bbd5c',
  failure: '#d0021b',
  warning: '#ff8c00',
}

export const Text: FunctionComponent<TextProps> = ({
  display,
  compact,
  size,
  bold,
  color,
  decoration,
  transform,
  transition,
  align,
  clamp,
  children,
  stub = false,
}) => (
  stub ? (
    size === undefined ? (
      null
    ) : (
      <Box
        as="span"
        display={display}
      >
        {Array(clamp === undefined ? 1 : clamp).fill(1).map((width, index) => (
          <Stub
            key={index}
            height={StubHeight[size]}
            width={width}
            top={compact ? StubOffsetCompactTop[size] : StubOffsetTop[size]}
            bottom={compact ? StubOffsetCompactBottom[size] : StubOffsetBottom[size]}
          />
        ))}
      </Box>
    )
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
      align={align}
      clamp={clamp}
      children={<Breaker children={children}/>}
    />
  )

)

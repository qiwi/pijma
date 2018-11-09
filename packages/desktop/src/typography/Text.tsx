import React, {SFC} from 'react'

import {Typo} from '@qiwi/pijma-core'

export interface TextProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse' | 'failure' | 'success' | 'warning'
  transform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
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

const TextTypo = Typo.withComponent('span')

export const Text: SFC<TextProps> = ({display, compact, size, bold, color, transform, children}) => (
  <TextTypo
    display={display}
    size={size === undefined ? undefined : TextSize[size]}
    height={size === undefined ? undefined : compact ? TextHeightCompact[size] : TextHeight[size]}
    weight={bold === undefined ? undefined : bold ? 'strong' : 'normal'}
    color={color}
    transform={transform}
    children={children}
  />
)

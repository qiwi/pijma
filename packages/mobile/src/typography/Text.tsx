import React, {SFC} from 'react'

import {Typo} from '@qiwi/pijma-core'

export interface TextProps {
  display?: 'block' | 'inline' | 'inline-block'
  size?: 'assist' | 'normal' | 'accent'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'service' | 'inverse' | 'error' | 'success' | 'warning'
  transform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
}

const TextTypo = Typo.withComponent('span')

export const Text: SFC<TextProps> = ({display, compact, size, bold, color, transform, children}) => (
  <TextTypo
    display={display}
    compact={compact}
    size={size}
    weight={bold === undefined ? undefined : bold ? 'normal' : 'light'}
    color={color}
    transform={transform}
    children={children}
  />
)

import React, {SFC} from 'react'

import {Typo} from '@qiwi/pijma-core'

export interface ParagraphProps {
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'service' | 'inverse'
  transform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
}

const ParagraphSize: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 3.5,
  m: 4,
  l: 5,
}

const ParagraphHeight: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 5,
  m: 6,
  l: 8,
}

const ParagraphHeightCompact: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 4,
  m: 5,
  l: 7,
}

const ParagraphTypo = Typo.withComponent('p')

export const Paragraph: SFC<ParagraphProps> = ({size = 'm', bold = false, compact = false, color = 'default', transform, children}) => (
  <ParagraphTypo
    display="block"
    size={ParagraphSize[size]}
    height={compact ? ParagraphHeightCompact[size] : ParagraphHeight[size]}
    weight={bold === undefined ? undefined : bold ? 'strong' : 'normal'}
    color={color}
    transform={transform}
    children={children}
  />
)

Paragraph.defaultProps = {
  size: 'm',
  bold: false,
  compact: false,
  color: 'default',
}

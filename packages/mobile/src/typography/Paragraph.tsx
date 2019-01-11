import React, {FunctionComponent} from 'react'

import {Typo, TypoProps, Placeholder, Box} from '@qiwi/pijma-core'

export interface ParagraphProps {
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse'
  transform?: TypoProps['transform']
  placeholder?: boolean
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

const PlaceholderOffset: { [size in NonNullable<ParagraphProps['size']>]: {top: number, bottom: number} } = {
  s: {top: 2, bottom: 1},
  m: {top: 1, bottom: 2},
  l: {top: 3, bottom: 2},
}

const PlaceholderOffsetCompact: { [size in NonNullable<ParagraphProps['size']>]: {top: number, bottom: number} } = {
  s: {top: 1, bottom: 1},
  m: {top: 1, bottom: 1},
  l: {top: 3, bottom: 1},
}

const PlaceholderHeight: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 2,
  m: 3,
  l: 3,
}

const ParagraphColor: { [color in NonNullable<ParagraphProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({size = 'm', bold = false, compact = false, color = 'default', transform, placeholder, children}) => {
  if (placeholder) {
    const offset = compact ? PlaceholderOffsetCompact[size] : PlaceholderOffset[size]
    const placeholderColor = color === 'inverse' ? ParagraphColor['inverse'] : ParagraphColor['default']
    return (
      <Box>
        <Box pt={offset.top} pb={offset.bottom}>
          <Placeholder height={PlaceholderHeight[size]} width={75} color={placeholderColor}/>
        </Box>
        <Box pt={offset.top} pb={offset.bottom}>
          <Placeholder height={PlaceholderHeight[size]} width={88} color={placeholderColor}/>
        </Box>
        <Box pt={offset.top} pb={offset.bottom}>
          <Placeholder height={PlaceholderHeight[size]} width={62} color={placeholderColor}/>
        </Box>
      </Box>
    )
  }
  return (
    <Typo
      as="p"
      display="block"
      size={ParagraphSize[size]}
      height={compact ? ParagraphHeightCompact[size] : ParagraphHeight[size]}
      weight={bold ? 500 : 300}
      color={ParagraphColor[color]}
      transform={transform}
      children={children}
    />
  )
}

Paragraph.defaultProps = {
  size: 'm',
  bold: false,
  compact: false,
  color: 'default',
}

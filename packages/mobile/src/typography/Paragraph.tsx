import React, {FunctionComponent, Fragment} from 'react'

import {Box, Breaker, Typo, TypoProps, Stub} from '@qiwi/pijma-core'

export interface ParagraphProps {
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse'
  transform?: TypoProps['transform']
  align?: TypoProps['align']
  clamp?: number
  stub?: boolean
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

const StubOffsetTop: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 2,
  m: 1,
  l: 3,
}

const StubOffsetBottom: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 1,
  m: 2,
  l: 2,
}

const StubOffsetCompactTop: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 1,
  m: 1,
  l: 3,
}

const StubOffsetCompactBottom: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 1,
  m: 1,
  l: 1,
}

const StubHeight: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 2,
  m: 3,
  l: 3,
}

const ParagraphColor: { [color in NonNullable<ParagraphProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  size = 'm',
  bold = false,
  compact = false,
  color = 'default',
  transform,
  align,
  stub,
  clamp,
  children,
}) => (
  stub ? (
    <Fragment>
      {Array(clamp !== undefined ? clamp : 3).fill(1).map((v, i) => i % 3 === 0 ? v - 0.2 : i % 3 === 1 ? v - 0.1 : v - 0.3).map((width: number, id: number) => (
        <Box
          key={id}
          width={width}
          ml={align === 'center' || align === 'right' ? 'auto' : undefined}
          mr={align === 'center' || align === 'left' ? 'auto' : undefined}
        >
          <Stub
            top={compact ? StubOffsetCompactTop[size] : StubOffsetTop[size]}
            bottom={compact ? StubOffsetCompactBottom[size] : StubOffsetBottom[size]}
            height={StubHeight[size]}
            width={1}
            inverse={color === 'inverse'}
          />
        </Box>
      ))}
    </Fragment>
  ) : (
    <Typo
      as="p"
      display="block"
      size={ParagraphSize[size]}
      height={compact ? ParagraphHeightCompact[size] : ParagraphHeight[size]}
      weight={bold ? 500 : 300}
      color={ParagraphColor[color]}
      transform={transform}
      align={align}
      clamp={clamp}
      children={<Breaker children={children}/>}
    />
  )
)

Paragraph.defaultProps = {
  size: 'm',
  bold: false,
  compact: false,
  color: 'default',
}

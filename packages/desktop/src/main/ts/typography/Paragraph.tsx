import {
  Box,
  Breaker,
  getDataProps,
  Stub,
  Typo,
  TypoProps,
} from '@qiwi/pijma-core'
import React, { FC, Fragment, ReactNode } from 'react'

export interface ParagraphProps {
  size?: 's' | 'm' | 'l'
  bold?: boolean
  compact?: boolean
  color?: 'default' | 'support' | 'inverse'
  transform?: TypoProps['transform']
  align?: TypoProps['align']
  clamp?: number
  stub?: boolean
  children?: ReactNode
}

const ParagraphSize: { [size in NonNullable<ParagraphProps['size']>]: number } =
  {
    s: 3.5,
    m: 4,
    l: 5,
  }

const ParagraphHeight: {
  [size in NonNullable<ParagraphProps['size']>]: number
} = {
  s: 5,
  m: 6,
  l: 8,
}

const ParagraphHeightCompact: {
  [size in NonNullable<ParagraphProps['size']>]: number
} = {
  s: 4,
  m: 5,
  l: 7,
}

const StubOffsetTop: { [size in NonNullable<ParagraphProps['size']>]: number } =
  {
    s: 2,
    m: 1,
    l: 3,
  }

const StubOffsetBottom: {
  [size in NonNullable<ParagraphProps['size']>]: number
} = {
  s: 1,
  m: 2,
  l: 2,
}

const StubOffsetCompactTop: {
  [size in NonNullable<ParagraphProps['size']>]: number
} = {
  s: 1,
  m: 1,
  l: 3,
}

const StubOffsetCompactBottom: {
  [size in NonNullable<ParagraphProps['size']>]: number
} = {
  s: 1,
  m: 1,
  l: 1,
}

const StubHeight: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 2,
  m: 3,
  l: 3,
}

const ParagraphColor: {
  [color in NonNullable<ParagraphProps['color']>]: string
} = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
}

export const Paragraph: FC<ParagraphProps> = ({
  size = 'm',
  bold = false,
  compact = false,
  color = 'default',
  transform,
  align,
  stub,
  clamp,
  children,
  ...rest
}) =>
  stub ? (
    <Fragment>
      {new Array(clamp === undefined ? 3 : clamp)
        .fill(0)
        .map((_, i) => (i % 3 === 0 ? 0.8 : i % 3 === 1 ? 0.9 : 0.7))
        .map((width, id) => (
          <Box
            key={id}
            width={width}
            ml={align === 'center' || align === 'right' ? 'auto' : undefined}
            mr={align === 'center' || align === 'left' ? 'auto' : undefined}
          >
            <Stub
              top={compact ? StubOffsetCompactTop[size] : StubOffsetTop[size]}
              bottom={
                compact ? StubOffsetCompactBottom[size] : StubOffsetBottom[size]
              }
              height={StubHeight[size]}
              width={1}
              inverse={color === 'inverse'}
            />
          </Box>
        ))}
    </Fragment>
  ) : (
    <Typo
      {...getDataProps(rest)}
      as="p"
      display="block"
      size={ParagraphSize[size]}
      height={compact ? ParagraphHeightCompact[size] : ParagraphHeight[size]}
      weight={bold ? 500 : 300}
      color={ParagraphColor[color]}
      transform={transform}
      align={align}
      clamp={clamp}
      children={<Breaker children={children} />}
    />
  )

Paragraph.displayName = 'Paragraph'

Paragraph.defaultProps = {
  size: 'm',
  bold: false,
  compact: false,
  color: 'default',
}

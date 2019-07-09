import React, {FunctionComponent} from 'react'

import {Breaker, Box, Stub, Typo, TypoProps} from '@qiwi/pijma-core'

export interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2' | '3' | '4' | '5'
  color?: 'default' | 'inverse'
  align?: TypoProps['align']
  stub?: boolean
}

const HeadingSize: { [size in HeadingProps['size']]: number } = {
  1: 8,
  2: 7,
  3: 6,
  4: 5,
  5: 4,
}

const HeadingHeight: { [size in HeadingProps['size']]: number } = {
  1: 9,
  2: 8,
  3: 7,
  4: 6,
  5: 5,
}

const HeadingTag: { [size in HeadingProps['size']]: NonNullable<HeadingProps['tag']> } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
}

const HeadingWeight: { [size in HeadingProps['size']]: number } = {
  1: 900,
  2: 900,
  3: 900,
  4: 700,
  5: 700,
}

const StubOffsetTop: { [size in HeadingProps['size']]: number } = {
  1: 3,
  2: 3,
  3: 2,
  4: 2,
  5: 1,
}

const StubOffsetBottom: { [size in HeadingProps['size']]: number } = {
  1: 2,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
}

const StubHeight: { [size in HeadingProps['size']]: number } = {
  1: 4,
  2: 4,
  3: 4,
  4: 3,
  5: 3,
}

const HeadingColor: { [color in NonNullable<HeadingProps['color']>]: string } = {
  default: '#000',
  inverse: '#fff',
}

export const Heading: FunctionComponent<HeadingProps> = ({tag, size, color = 'default', align, stub, children}) => (
  stub ? (
    <Box
      ml={align === 'center' || align === 'right' ? 'auto' : 'none'}
      mr={align === 'center' ? 'auto' : 'none'}
      width={50}
      maxWidth={1}
    >
      <Stub
        top={StubOffsetTop[size]}
        bottom={StubOffsetBottom[size]}
        width={1}
        height={StubHeight[size]}
        inverse={color === 'inverse'}
      />
    </Box>
  ) : (
    <Typo
      as={tag ? tag : HeadingTag[size]}
      display="block"
      size={HeadingSize[size]}
      height={HeadingHeight[size]}
      weight={HeadingWeight[size]}
      color={HeadingColor[color]}
      align={align}
      children={<Breaker children={children}/>}
    />
  )
)

Heading.defaultProps = {
  color: 'default',
}

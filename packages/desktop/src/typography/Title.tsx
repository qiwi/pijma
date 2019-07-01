import React, {FunctionComponent} from 'react'

import {Breaker, Typo, TypoProps, Stub} from '@qiwi/pijma-core'

export interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2'
  color?: 'default' | 'inverse'
  stub?: boolean
  align?: TypoProps['align']
}

const TitleSize: { [size in TitleProps['size']]: number } = {
  1: 12,
  2: 10,
}

const TitleHeight: { [size in TitleProps['size']]: number } = {
  1: 14,
  2: 12,
}

const TitleTag: { [size in TitleProps['size']]: NonNullable<TitleProps['tag']> } = {
  1: 'h1',
  2: 'h2',
}

const TitleWeight: { [size in TitleProps['size']]: number } = {
  1: 900,
  2: 900,
}

const StubOffsetTop: { [size in TitleProps['size']]: number } = {
  1: 4,
  2: 4,
}

const StubOffsetBottom: { [size in TitleProps['size']]: number } = {
  1: 3,
  2: 2,
}

const StubHeight: { [size in TitleProps['size']]: number } = {
  1: 7,
  2: 6,
}

const TitleColor: { [color in NonNullable<TitleProps['color']>]: string } = {
  default: '#000',
  inverse: '#fff',
}

export const Title: FunctionComponent<TitleProps> = ({tag, size, color = 'default', align, stub, children}) => (
  stub ? (
    <Stub
      top={StubOffsetTop[size]}
      bottom={StubOffsetBottom[size]}
      height={StubHeight[size]}
      width={50}
      inverse={color === 'inverse'}
    />
  ) : (
    <Typo
      as={tag ? tag : TitleTag[size]}
      display="block"
      size={TitleSize[size]}
      height={TitleHeight[size]}
      weight={TitleWeight[size]}
      color={TitleColor[color]}
      align={align}
      children={<Breaker children={children}/>}
    />
  )
)

Title.defaultProps = {
  color: 'default',
}

import React, {FunctionComponent} from 'react'

import {Typo, Box, Stub} from '@qiwi/pijma-core'

export interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2'
  color?: 'default' | 'inverse'
  stub?: boolean
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

const StubOffset: { [size in TitleProps['size']]: {top: number, bottom: number} } = {
  1: {top: 4, bottom: 3},
  2: {top: 4, bottom: 2},
}

const StubHeight: { [size in TitleProps['size']]: number } = {
  1: 7,
  2: 6,
}

const TitleColor: { [color in NonNullable<TitleProps['color']>]: string } = {
  default: '#000',
  inverse: '#fff',
}

export const Title: FunctionComponent<TitleProps> = ({tag, size, color = 'default', stub, children}) => {
  if (stub) {
    const offset = StubOffset[size]
    return (
      <Box pt={offset.top} pb={offset.bottom}>
        <Stub
          height={StubHeight[size]}
          width={50}
          color={color === 'inverse' ? TitleColor.inverse : TitleColor.default}
        />
      </Box>
    )
  }
  return (
    <Typo
      as={tag ? tag : TitleTag[size]}
      display="block"
      size={TitleSize[size]}
      height={TitleHeight[size]}
      weight={TitleWeight[size]}
      color={TitleColor[color]}
      children={children}
    />
  )
}

Title.defaultProps = {
  color: 'default',
}

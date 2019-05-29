import React, {FunctionComponent} from 'react'

import {Breaker, Typo} from '@qiwi/pijma-core'

export interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2'
  color?: 'default' | 'inverse'
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

const TitleColor: { [color in NonNullable<TitleProps['color']>]: string } = {
  default: '#000',
  inverse: '#fff',
}

export const Title: FunctionComponent<TitleProps> = ({tag, size, color = 'default', children}) => (
  <Typo
    as={tag ? tag : TitleTag[size]}
    display="block"
    size={TitleSize[size]}
    height={TitleHeight[size]}
    weight={TitleWeight[size]}
    color={TitleColor[color]}
    children={<Breaker children={children}/>}
  />
)

Title.defaultProps = {
  color: 'default',
}

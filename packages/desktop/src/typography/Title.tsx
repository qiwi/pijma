import React, {SFC} from 'react'

import {Typo, Theme} from '@qiwi/pijma-core'

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

const TitleWeight: { [size in TitleProps['size']]: keyof Theme['font']['weight'] } = {
  1: 'heavy',
  2: 'heavy',
}

export const Title: SFC<TitleProps> = ({tag, size, color = 'default', children}) => {
  const Tag = Typo.withComponent(tag ? tag : TitleTag[size])
  return (
    <Tag
      display="block"
      size={TitleSize[size]}
      height={TitleHeight[size]}
      weight={TitleWeight[size]}
      color={color}
      children={children}
    />
  )
}

Title.defaultProps = {
  color: 'default',
}

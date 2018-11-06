import React, {SFC} from 'react'

import {Typo, TypoSize, TypoWeight} from '@qiwi/pijma-core'

export type TitleSize = '1' | '2'

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2'
  color?: 'default' | 'inverse'
}

const TitleSizeTag: { [size in TitleSize]: TitleTag } = {
  1: 'h1',
  2: 'h2',
}

const TitleTypoSize: { [size in TitleSize]: TypoSize } = {
  1: 't1',
  2: 't2',
}

const TitleTypoWeight: { [size in TitleSize]: TypoWeight } = {
  1: 'heavy',
  2: 'heavy',
}

export const Title: SFC<TitleProps> = ({tag, size, color = 'default', children}) => {
  const Tag = Typo.withComponent(tag ? tag : TitleSizeTag[size])
  return (
    <Tag
      display="block"
      size={TitleTypoSize[size]}
      weight={TitleTypoWeight[size]}
      color={color}
      children={children}
    />
  )
}

Title.defaultProps = {
  color: 'default',
}

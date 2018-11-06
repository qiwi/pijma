import React, {SFC} from 'react'

import {Typo, TypoSize, TypoWeight} from '@qiwi/pijma-core'

export type HeadingSize = '1' | '2' | '3'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2' | '3'
  color?: 'default' | 'inverse'
}

const HeadingSizeTag: { [size in HeadingSize]: HeadingTag } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
}

const HeadingTypoSize: { [size in HeadingSize]: TypoSize } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
}

const HeadingTypoWeight: { [size in HeadingSize]: TypoWeight } = {
  1: 'heavy',
  2: 'heavy',
  3: 'heavy',
}

export const Heading: SFC<HeadingProps> = ({tag, size, color = 'default', children}) => {
  const Tag = Typo.withComponent(tag ? tag : HeadingSizeTag[size])
  return (
    <Tag
      display="block"
      size={HeadingTypoSize[size]}
      weight={HeadingTypoWeight[size]}
      color={color}
      children={children}
    />
  )
}

Heading.defaultProps = {
  color: 'default',
}

import React, {SFC} from 'react'

import {Typo, Theme} from '@qiwi/pijma-core'

export interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2' | '3'
  color?: 'default' | 'inverse'
}

const HeadingSize: { [size in HeadingProps['size']]: number } = {
  1: 8,
  2: 7,
  3: 6,
}

const HeadingHeight: { [size in HeadingProps['size']]: number } = {
  1: 9,
  2: 8,
  3: 7,
}

const HeadingTag: { [size in HeadingProps['size']]: NonNullable<HeadingProps['tag']> } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
}

const HeadingWeight: { [size in HeadingProps['size']]: keyof Theme['font']['weight'] } = {
  1: 'heavy',
  2: 'heavy',
  3: 'heavy',
}

export const Heading: SFC<HeadingProps> = ({tag, size, color = 'default', children}) => {
  const Tag = Typo.withComponent(tag ? tag : HeadingTag[size])
  return (
    <Tag
      display="block"
      size={HeadingSize[size]}
      height={HeadingHeight[size]}
      weight={HeadingWeight[size]}
      color={color}
      children={children}
    />
  )
}

Heading.defaultProps = {
  color: 'default',
}

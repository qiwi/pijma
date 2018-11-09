import React, {SFC} from 'react'

import {Typo, Theme} from '@qiwi/pijma-core'

export interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2' | '3' | '4'
  color?: 'default' | 'inverse'
}

const HeadingSize: { [size in HeadingProps['size']]: number } = {
  1: 7,
  2: 6,
  3: 5,
  4: 4,
}

const HeadingHeight: { [size in HeadingProps['size']]: number } = {
  1: 8,
  2: 7,
  3: 6,
  4: 5,
}

const HeadingTag: { [size in HeadingProps['size']]: NonNullable<HeadingProps['tag']> } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
}

const HeadingWeight: { [size in HeadingProps['size']]: keyof Theme['font']['weight'] } = {
  1: 'heavy',
  2: 'heavy',
  3: 'heavy',
  4: 'bold',
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

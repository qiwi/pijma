import { Heading, HeadingProps } from '@qiwi/pijma-mobile'
import React, { FC } from 'react'

interface HeadingRendererProps {
  level: '1' | '2' | '3' | '4' | '5' | '6'
}

const LevelSize: {
  [level in HeadingRendererProps['level']]: HeadingProps['size']
} = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '4',
  6: '4',
}

const HeadingRenderer: FC<HeadingRendererProps> = (props) => (
  <Heading size={LevelSize[props.level]}>{props.children}</Heading>
)

export default HeadingRenderer

import React, {FC} from 'react'

import {Heading, HeadingProps} from '@qiwi/pijma-desktop'

interface HeadingRendererProps {
  level: '1' | '2' | '3' | '4' | '5' | '6'
}

const LevelSize: { [level in HeadingRendererProps['level']]: HeadingProps['size'] } = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '5',
}

const HeadingRenderer: FC<HeadingRendererProps> = (props) => (
  <Heading size={LevelSize[props.level]}>
    {props.children}
  </Heading>
)

export default HeadingRenderer

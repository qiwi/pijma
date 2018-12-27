import React, {FC} from 'react'

import {themes, ThemeProvider} from '@qiwi/pijma-core'

import {Heading, HeadingProps} from '@qiwi/pijma-mobile'

interface HeadingRendererProps {
  level: '1' | '2' | '3' | '4' | '5' | '6'
}

const LevelSize: { [level in HeadingRendererProps['level']]: HeadingProps['size'] } = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '4',
  6: '4',
}

const HeadingRenderer: FC<HeadingRendererProps> = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Heading size={LevelSize[props.level]}>
      {props.children}
    </Heading>
  </ThemeProvider>
)

export default HeadingRenderer

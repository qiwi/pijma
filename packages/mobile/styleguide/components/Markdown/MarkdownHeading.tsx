import React, {FC} from 'react'

import {themes, ThemeProvider, Box} from '@qiwi/pijma-core'

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

const LevelMarginTop: { [level in HeadingRendererProps['level']]: number } = {
  1: 12,
  2: 12,
  3: 12,
  4: 12,
  5: 12,
  6: 12,
}

const LevelMarginBottom: { [level in HeadingRendererProps['level']]: number } = {
  1: 6,
  2: 6,
  3: 6,
  4: 6,
  5: 6,
  6: 6,
}

const MardownHeadingRenderer: FC<HeadingRendererProps> = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Box mt={LevelMarginTop[props.level]} mb={LevelMarginBottom[props.level]}>
      <Heading size={LevelSize[props.level]}>
        {props.children}
      </Heading>
    </Box>
  </ThemeProvider>
)

export default MardownHeadingRenderer

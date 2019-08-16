import React, {FC} from 'react'

import {Box} from '@qiwi/pijma-core'

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

const LevelMarginTop: { [level in HeadingRendererProps['level']]: number } = {
  1: 11,
  2: 11,
  3: 8,
  4: 7,
  5: 6,
  6: 6,
}

const LevelMarginBottom: { [level in HeadingRendererProps['level']]: number } = {
  1: 3,
  2: 3,
  3: 3,
  4: 3,
  5: 3,
  6: 3,
}

const MardownHeadingRenderer: FC<HeadingRendererProps> = (props) => (
  <Box
    mt={LevelMarginTop[props.level]}
    mb={LevelMarginBottom[props.level]}
    css={{'&:first-child': {marginTop: 0}, '&:last-child': {marginBottom: 0}}}
  >
    <Heading size={LevelSize[props.level]}>
      {props.children}
    </Heading>
  </Box>
)

export default MardownHeadingRenderer

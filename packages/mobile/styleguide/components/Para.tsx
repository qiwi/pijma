import React, {FC} from 'react'

import {themes, ThemeProvider, Box} from '@qiwi/pijma-core'

import {Paragraph} from '@qiwi/pijma-mobile'

const ParagraphRenderer: FC = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Box my={4}>
      <Paragraph size="m">
        {props.children}
      </Paragraph>
    </Box>
  </ThemeProvider>
)

export default ParagraphRenderer

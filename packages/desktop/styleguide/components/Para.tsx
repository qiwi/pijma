import React, {FC} from 'react'

import {themes, ThemeProvider, Box} from '@qiwi/pijma-core'

import {Paragraph} from '@qiwi/pijma-desktop'

const ParagraphRenderer: FC = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Box my={3}>
      <Paragraph size="m">
        {props.children}
      </Paragraph>
    </Box>
  </ThemeProvider>
)

export default ParagraphRenderer

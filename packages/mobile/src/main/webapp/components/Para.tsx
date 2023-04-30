import React, { FC, ReactNode } from 'react'

import { Box } from '@qiwi/pijma-core'

import { Paragraph, ParagraphProps } from '../../ts'

interface ParagraphRendererProps {
  children?: ReactNode
}

const SizeMargin: { [size in NonNullable<ParagraphProps['size']>]: number } = {
  s: 3,
  m: 4,
  l: 5,
}

const ParagraphRenderer: FC<ParagraphRendererProps> = ({ children }) => (
  <Box
    my={SizeMargin.m}
    css={{
      '&:first-child': { marginTop: 0 },
      '&:last-child': { marginBottom: 0 },
    }}
  >
    <Paragraph size="m">{children}</Paragraph>
  </Box>
)

export default ParagraphRenderer

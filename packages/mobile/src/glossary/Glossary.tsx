import React, {FC} from 'react'
import {Box} from '@qiwi/pijma-core'
import {Paragraph, Text} from '../typography'

export interface GlossaryProps {
  children: {title: string, content: string}[]
}

export const Glossary: FC<GlossaryProps> = ({children}) => (
  <Box as="dl">
    {children.map((item, i) => (
      <Box key={i} mt={i === 0 ? undefined : 3}>
        <Box as="dt">
          <Text bold={false} compact size="s" color="support" children={item.title}/>
        </Box>
        <Box as="dd" mt={1}>
          <Paragraph compact size="l" children={item.content}/>
        </Box>
      </Box>
    ))}
  </Box>
)

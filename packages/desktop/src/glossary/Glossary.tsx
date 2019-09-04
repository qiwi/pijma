import React, {FC, ReactElement} from 'react'
import {Box} from '@qiwi/pijma-core'
import {Text} from '../typography'

type GlossaryText = ReactElement | string

export interface GlossaryProps {
  children: {title?: GlossaryText, content: GlossaryText | GlossaryText[]}[]
}

export const Glossary: FC<GlossaryProps> = ({children}) => (
  <Box as="dl">
    {children.map((item, i) => (
      ([] as GlossaryText[]).concat(item.content).map((value, index) => (
        <Box key={index} mt={index !== 0 ? 2 : i === 0 ? undefined : 5}>
          <Box as="dt">
            <Text
              bold={false}
              compact
              size="s"
              color="support"
              children={index === 0 ? item.title : null}
            />
          </Box>
          <Box as="dd" mt={1}>
            <Text
              bold={false}
              compact
              size="m"
              children={value}
            />
          </Box>
        </Box>
      ))
    ))}
  </Box>
)

import { Box, Spacer } from '@qiwi/pijma-core'
import React, { FC, ReactElement } from 'react'

import { Text } from '../typography'

type GlossaryText = ReactElement | string

export interface GlossaryProps {
  children: { title: GlossaryText; content: GlossaryText | GlossaryText[] }[]
  stub?: boolean
}

export const Glossary: FC<GlossaryProps> = ({ children, stub }) =>
  stub ? (
    <Box as="dl">
      {children.map((item, i) => (
        <Box key={i} mt={i === 0 ? undefined : 5}>
          <Box as="dt" mr={13} minWidth={0.5}>
            <Text stub display="block" bold={false} compact size="s" />
          </Box>
          <Box as="dd" mt={1}>
            <Spacer size="xs">
              {(Array.isArray(item.content)
                ? item.content
                : [item.content]
              ).map((_content, j) => (
                <Text
                  key={`${i}.${j}`}
                  stub
                  bold={false}
                  display="block"
                  compact
                  size="m"
                />
              ))}
            </Spacer>
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
    <Box as="dl">
      {children.map((item, i) => (
        <Box key={i} mt={i === 0 ? undefined : 5}>
          <Box as="dt">
            <Text
              display="block"
              bold={false}
              compact
              size="s"
              color="support"
              children={item.title}
            />
          </Box>
          <Box mt={1} as="dd">
            <Spacer size="xs">
              {(Array.isArray(item.content)
                ? item.content
                : [item.content]
              ).map((content, j) => (
                <Text
                  key={`${i}.${j}`}
                  display="block"
                  bold={false}
                  compact
                  size="m"
                  children={content}
                />
              ))}
            </Spacer>
          </Box>
        </Box>
      ))}
    </Box>
  )

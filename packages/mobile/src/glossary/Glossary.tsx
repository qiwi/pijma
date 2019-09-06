import React, {FC, ReactElement} from 'react'
import {Box} from '@qiwi/pijma-core'
import {Text} from '../typography'

type GlossaryText = ReactElement | string

export interface GlossaryProps {
  children: {title: GlossaryText, content: GlossaryText | GlossaryText[]}[]
}

export const Glossary: FC<GlossaryProps> = ({children}) => (
  <Box as="dl">
    {children.map((item, i) => (
      <Box
        key={i}
        mt={i === 0 ? undefined : 5}
      >
        <Box as="dt">
          <Text
            bold={false}
            compact
            size="s"
            color="support"
            children={item.title}
          />
        </Box>
        <Box mt={1} as="dd">
          {([] as GlossaryText[]).concat(item.content).map((content, j) => (
            <Box key={`${i}.${j}`} mt={j === 0 ? undefined : 2}>
              <Text
                bold={false}
                compact
                size="m"
                children={content}
              />
            </Box>
          ))}
        </Box>
      </Box>
    ))}
  </Box>
)

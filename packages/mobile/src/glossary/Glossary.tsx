import React, {FC, ReactElement} from 'react'
import {Box} from '@qiwi/pijma-core'
import {Text} from '../typography'

type GlossaryText = ReactElement | string

export interface GlossaryProps {
  children: {title: GlossaryText, content: GlossaryText | GlossaryText[]}[]
  stub?: boolean
}

export const Glossary: FC<GlossaryProps> = ({children, stub = false}) => (
  stub ? (
    <Box as="dl">
      <Box as="dt" width={15}>
        <Text
          display="block"
          compact
          size="s"
          stub
        />
      </Box>
      <Box as="dd" width={38}>
        <Text
          display="block"
          compact
          size="m"
          stub
        />
      </Box>
    </Box>
  ) : (
    <Box as="dl">
      {children.map((item, i) => (
        <Box
          key={i}
          mt={i === 0 ? undefined : 5}
        >
          <Box as="dt">
            <Text
              bold={false}
              display="block"
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
                  display="block"
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
)

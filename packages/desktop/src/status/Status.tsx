import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Card, Box} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '../typography/'

export interface StatusProps {
  icon?: ReactNode
  title?: string
  actions?: ReactNode
  content?: ReactNode
}

export const Status: FC<StatusProps> = ({icon, title, actions, content, children}) => (
  <Card>
    <Flex align="center" direction="column">
      {icon ? (
        <FlexItem
          height={12}
          width={12}
          mb={8}
          children={icon}
        />
      ) : (
        null
      )}
      {title ? (
        <Heading
          align="center"
          size="4"
          children={title}
        />
      ) : (
        null
      )}
      {content ? (
        <Box mt={title ? 2 : 0}>
          {typeof content === 'string' ? (
            <Paragraph
              align="center"
              size="m"
              children={content}
            />
          ) : (
            children
          )}
        </Box>
      ) : (
        null
      )}
      {actions ? (
        <Box
          mt={content || title ? 4 : 0}
          children={actions}
        />
      ) : (
        null
      )}
      {children ? (
        <Box
          mt={2}
          children={children}
        />
      ) : (
        null
      )}
    </Flex>
  </Card>
)

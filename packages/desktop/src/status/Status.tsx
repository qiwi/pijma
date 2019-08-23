import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '../typography/'

export interface StatusProps {
  icon?: ReactNode
  title?: string
  actions?: ReactNode
  content?: ReactNode
}

export const Status: FC<StatusProps> = ({icon, title, actions, content, children}) => (
  <Flex align="center" direction="column">
    {icon ? (
      <FlexItem
        height={16}
        width={16}
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
      <FlexItem width={1} mt={title ? 2 : 0}>
        {typeof content === 'string' ? (
          <Paragraph
            align="center"
            size="m"
            children={content}
          />
        ) : (
          children
        )}
      </FlexItem>
    ) : (
      null
    )}
    {actions ? (
      <FlexItem
        mt={content || title ? 4 : 0}
        children={actions}
      />
    ) : (
      null
    )}
    {children ? (
      <FlexItem
        width={1}
        mt={2}
        children={children}
      />
    ) : (
      null
    )}
  </Flex>
)

import React, {FC, ReactNode} from 'react'

import {Flex, FlexItem, Stub} from '@qiwi/pijma-core'

import {Heading, Paragraph, Text} from '../typography'

import {Button} from '../button'

export interface StatusProps {
  icon?: ReactNode
  title?: string
  actions?: ReactNode
  content?: ReactNode
  stub?: boolean
}

export const Status: FC<StatusProps> = ({
  icon,
  title,
  actions,
  content,
  children,
  stub = false,
}) => (
  <Flex align="center" direction="column">
    {icon ? (
      stub ? (
        <FlexItem
          height={16}
          width={16}
          mb={6}
        >
          <Stub height={16} width={16} r={32}/>
        </FlexItem>
      ) : (
        <FlexItem
          height={16}
          width={16}
          mb={6}
          children={icon}
        />
      )
    ) : (
      null
    )}
    {title ? (
      stub ? (
        <FlexItem width={1} maxWidth={41}>
          <Heading
            align="center"
            size="4"
            stub
          />
        </FlexItem>
      ) : (
        <Heading
          align="center"
          size="4"
          children={title}
        />
      )
    ) : (
      null
    )}
    {content ? (
      stub ? (
        <FlexItem maxWidth={25} width={1} mt={title ? 2 : 0}>
          <Text
            display="block"
            align="center"
            size="m"
            stub
          />
        </FlexItem>
      ) : (
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
      )
    ) : (
      null
    )}
    {actions ? (
      stub ? (
        <FlexItem
          mt={content || title ? 4 : 0}
        >
          <Button kind="simple" size="normal" stub type="button"/>
        </FlexItem>
      ) : (
        <FlexItem
          width={1}
          mt={content || title ? 4 : 0}
          children={actions}
        />
      )
    ) : (
      null
    )}
    {children ? (
      stub ? (
        null
      ) : (
        <FlexItem
          width={1}
          mt={2}
          children={children}
        />
      )
    ) : (
      null
    )}
  </Flex>
)

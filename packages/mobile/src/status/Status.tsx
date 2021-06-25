import React, {FC, ReactNode} from 'react'

import {Box, Flex, FlexItem, Stub} from '@qiwi/pijma-core'

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
      <FlexItem
        height={16}
        width={16}
        mb={6}
      >
        {stub ? (
          <Stub height={16} width={16} r={32}/>
        ) : (
          icon
        )}
      </FlexItem>
    ) : (
      null
    )}
    {title ? (
      <FlexItem width={1} maxWidth={stub ? 41 : 1}>
        <Heading
          align="center"
          size="4"
          stub={stub ? true : false}
          children={stub ? null : title}
        />
      </FlexItem>
    ) : (
      null
    )}
    {content ? (
      <FlexItem width={1} mt={title ? 2 : 0}>
        {stub ? (
          <Box maxWidth={25} width={1} m="auto">
            <Text
              display="block"
              size="m"
              stub
            />
          </Box>
        ) : (
          typeof content === 'string' ? (
            <Paragraph
              align="center"
              size="m"
              children={content}
            />
          ) : (
            content
          )
        )}
      </FlexItem>
    ) : (
      null
    )}
    {actions ? (
      <FlexItem mt={content || title ? 4 : 0}>
        {stub ? (
          <Button kind="simple" size="normal" stub type="button"/>
        ) : (
          actions
        )}
      </FlexItem>
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

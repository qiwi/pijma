import { Card, Flex, FlexItem, Typo } from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

import { Heading, Paragraph } from '../typography'

export interface OopsProps {
  logo?: ReactNode
  error: ReactNode
  title: string
  content: ReactNode
  footer?: ReactNode
}

export const Oops: FC<OopsProps> = ({
  logo,
  error,
  title,
  content,
  footer,
}) => (
  <Card px={6} minHeight="100%" bg="#fff">
    <Flex align="center" direction="column">
      {logo ? <FlexItem my={6} shrink={0} children={logo} /> : null}
      <FlexItem my={6}>
        {typeof error === 'string' ? (
          <Typo
            align="center"
            as="p"
            css={{
              overflow: 'unset',
              fontSize: '152px',
              fontWeight: 900,
              color: '#fff',
              textShadow: '0 12px 36px rgba(0, 0, 0, 0.1)',
            }}
            children={error}
          />
        ) : (
          error
        )}
      </FlexItem>
      <FlexItem my={2}>
        <Heading align="center" size="1" children={title} />
      </FlexItem>
      <FlexItem my={4}>
        {typeof content === 'string' ? (
          <Paragraph align="center" children={content} />
        ) : (
          content
        )}
      </FlexItem>
      {footer ? (
        <FlexItem
          my={6}
          children={
            typeof footer === 'string' ? (
              <Paragraph align="center" color="support" children={footer} />
            ) : (
              footer
            )
          }
        />
      ) : null}
    </Flex>
  </Card>
)

Oops.displayName = 'Oops'

import { Card, Flex, FlexItem, Typo } from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

import { Paragraph, Title } from '../typography'

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
  <Card minWidth={295} width="100%" py={22} minHeight="100%" bg="#fff">
    <Flex mx="auto" width={235} direction="column">
      {logo ? <FlexItem shrink={0} children={logo} /> : null}
      <FlexItem my={30}>
        <Flex align="center">
          <FlexItem shrink={0}>
            {typeof error === 'string' ? (
              <Typo
                as="p"
                css={{
                  overflow: 'unset',
                  fontSize: '220px',
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
          <FlexItem ml={11} width={1}>
            <Flex direction="column">
              <FlexItem>
                <Title size="2" children={title} />
              </FlexItem>
              <FlexItem mt={6}>
                {typeof content === 'string' ? (
                  <Paragraph children={content} />
                ) : (
                  content
                )}
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </FlexItem>
      {footer ? (
        <FlexItem
          shrink={0}
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

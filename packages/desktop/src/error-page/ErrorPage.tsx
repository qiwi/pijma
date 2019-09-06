import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Typo, Card} from '@qiwi/pijma-core'
import {Title, Text} from '../typography'

export interface ErrorPageProps {
  icon: ReactNode
  error: string
  title: string
  content: ReactNode
}

export const ErrorPage: FC<ErrorPageProps> = ({icon, error, title, content}) => (
  <Card bg="#fff" width={235} mx="auto">
    <Flex direction="column">
      <FlexItem
        width={60}
        height={12}
        children={icon}
      />
      <FlexItem mt={9}>
        <Flex align="center">
          <FlexItem width={99} height={66}>
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
          </FlexItem>
          <FlexItem ml={11}>
            <Flex direction="column">
              <FlexItem>
                <Title size="2" children={title}/>
              </FlexItem>
              <FlexItem mt={6}>
                <Text bold size="m" children={content}/>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </FlexItem>
    </Flex>
  </Card>
)

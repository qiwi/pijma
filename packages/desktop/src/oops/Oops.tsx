import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Typo, Card} from '@qiwi/pijma-core'
import {Title, Paragraph} from '../typography'

export interface OopsProps {
  icon: ReactNode
  error: string
  title: string
  content: ReactNode
  game?: ReactNode
}

export const Oops: FC<OopsProps> = ({icon, error, title, content, game}) => (
  <Card minWidth={295} width="100%" pt={22} minHeight="100%" bg="#fff">
    <Flex mx="auto" width={235} direction="column">
      <FlexItem
        width={60}
        height={12}
        children={icon}
      />
      <FlexItem mt={game ? 9 : 30}>
        <Flex align="center">
          <FlexItem shrink={0}>
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
                {typeof content === 'string' ? (
                  <Paragraph bold size="m" children={content}/>
                ) : (
                  content
                )}
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </FlexItem>
      {game ? (
        <FlexItem shrink={0} children={game}/>
      ) : (
        null
      )}
    </Flex>
  </Card>
)

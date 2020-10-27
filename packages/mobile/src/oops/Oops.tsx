import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Typo, Card} from '@qiwi/pijma-core'
import {Paragraph, Heading} from '../typography'

export interface ErrorPageProps {
  logo: ReactNode
  error: string
  title: string
  content: ReactNode
  footer?: ReactNode
}

export const Oops: FC<ErrorPageProps> = ({logo, error, title, content, footer}) => (
  <Card pt={4} pb={6} px={6} minHeight="100%" bg="#fff">
    <Flex align="center" direction="column">
      <FlexItem
        shrink={0}
        width={37}
        height={7}
        children={logo}
      />
      <FlexItem mt={footer ? 6 : 21}>
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
      </FlexItem>
      <FlexItem mt={2}>
        <Heading align="center" size="1" children={title}/>
      </FlexItem>
      <FlexItem mt={4}>
        {typeof content === 'string' ? (
          <Paragraph align="center" bold size="m" children={content}/>
        ) : (
          content
        )}
      </FlexItem>
      {footer ? (
        <FlexItem children={footer}/>
      ) : (
        null
      )}
    </Flex>
  </Card>
)

Oops.displayName = 'Oops'

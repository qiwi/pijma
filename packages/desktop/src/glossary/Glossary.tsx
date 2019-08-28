import React, {FC} from 'react'
import {Spacer, Flex, FlexItem, Card} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface GlossaryProps {
  title: string
  text: string
  type?: 'horizontal' | 'vertical' | 'border'
}

export const Glossary: FC<GlossaryProps> = ({title, text, type = 'vertical'}) => (
  type === 'horizontal' ? (
    <Flex>
      <FlexItem>
        <Paragraph size="m" color="support" children={title}/>
      </FlexItem>
      <FlexItem ml={6}>
        <Paragraph size="m" children={text}/>
      </FlexItem>
    </Flex>
  ) : type === 'border' ? (
    <Flex>
      <FlexItem>
        <Paragraph size="m" color="support" children={title}/>
      </FlexItem>
      <FlexItem mx={2}>
        <Card height={4.5} width={8} bb="dashed 1px #e6e6e6"/>
      </FlexItem>
      <FlexItem>
        <Paragraph size="m" children={text}/>
      </FlexItem>
    </Flex>
  ) : (
    <Spacer size="xxs">
      <Paragraph size="s" color="support" children={title}/>
      <Paragraph size="l" children={text}/>
    </Spacer>
  )
)

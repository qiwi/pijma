import React, {FC} from 'react'
import {Spacer} from '@qiwi/pijma-core'
import {Paragraph, Text} from '../typography'

export interface GlossaryProps {
  children: {title: string, content: string}[]
}

export const Glossary: FC<GlossaryProps> = ({children}) => (
  <Spacer size="s">
    {children.map((item, i) => (
      <Spacer key={i} size="xxs">
        <Text bold={false} compact size="s" color="support" children={item['title']}/>
        <Paragraph compact size="l" children={item['content']}/>
      </Spacer>
    ))}
  </Spacer>
)

import React, {FC, ReactElement} from 'react'
import {Striper, Card, Box, Spacer} from '@qiwi/pijma-core'
import {Heading, Paragraph} from '../typography'

type AnnotationText = ReactElement | string
type AnnotationItem = {itemContent: AnnotationText, itemTitle?: AnnotationText}

export interface AnnotationProps {
  children: {
    content?: AnnotationText,
    title?: AnnotationText,
    items?: AnnotationItem[]
  }
}

export const Annotation: FC<AnnotationProps> = ({children}) => {
  if (!children.items) {
    return (
      <Card px={11} pt={10} pb={11} r={10} b="solid 1px #e6e6e6">
        <AnnotationTop content={children.content!} title={children.title}/>
      </Card>
    )
  }
  if (!children.title && !children.content) {
    return (
      <Card px={11} pt={10} pb={11} r={10} b="solid 1px #e6e6e6">
        <AnnotationBottom items={children.items}/>
      </Card>
    )
  }
  return (
    <Card px={11} pt={10} pb={11} r={10} b="solid 1px #e6e6e6">
      <Striper>
        <Box pb={5}>
          <AnnotationTop content={children.content!} title={children.title}/>
        </Box>
        <Box pt={5}>
          <AnnotationBottom items={children.items}/>
        </Box>
      </Striper>
    </Card>
  )
}

const AnnotationTop: FC<{content: AnnotationText, title?: AnnotationText}> = (props) => (
  <Spacer size="xxs">
    {props.title ? (
      <Heading size="4">
        {props.title}
      </Heading>
    ) : null}
    <Paragraph>
      {props.content}
    </Paragraph>
  </Spacer>
)

const AnnotationBottom: FC<{items: AnnotationItem[]}> = (props) => (
  <Spacer size="m">
    {props.items.map((item, key) => (
      <Spacer size="xxs" key={key}>
        {item.itemTitle ? (
          <Heading size="5">
            {item.itemTitle}
          </Heading>
        ) : null}
        <Paragraph>
          {item.itemContent}
        </Paragraph>
      </Spacer>
    ))}
  </Spacer>
)

import React, {FunctionComponent, ReactNode} from 'react'

import {AccordionControl, Box, Card, Flex, FlexItem} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Paragraph} from '../typography'

export interface AccordionProps<I> {
  items: I[]
  bg?: string
  indent?: 's' | 'm' | 'l'
}

export interface AccordionItemModel {
  title: string
  content: ReactNode
}

const AccordionIndent: {
  [size in NonNullable<AccordionProps<AccordionItemModel>['indent']>]: number
} = {
  s: 8,
  m: 11,
  l: 17,
}

export const Accordion: FunctionComponent<
  AccordionProps<AccordionItemModel>
> = ({items, bg = '#fff', indent = 'm'}) => (
  <AccordionControl<AccordionItemModel>
    items={items}
    children={renderProps => (
      <Box py={3}>
        {renderProps.items.map((item, index) => (
          <Card
            key={index}
            bg={item.hovered ? bg : undefined}
            s={
              item.hovered
                ? '0 0 16px 0 rgba(0, 0, 0, 0.12)'
                : index + 1 === renderProps.items.length
                ? undefined
                : '0 1px 0 #e6e6e6'
            }
            transition="box-shadow 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            onMouseEnter={item.onMouseEnter}
            onMouseLeave={item.onMouseLeave}
          >
            <Flex
              wrap="nowrap"
              justify="space-between"
              align="start"
              cursor="pointer"
              px={AccordionIndent[indent]}
              pt={4}
              pb={item.opened ? 2 : 4}
              onClick={item.onClick}
            >
              <Paragraph bold size="m">
                {item.title}
              </Paragraph>
              <FlexItem
                shrink={0}
                width={6}
                height={6}
                ml={3}
                transform={`rotate(${item.opened ? 180 : 0}deg)`}
                transition="transform 0.3s ease-in-out"
              >
                <Icon name="angle-small-down" />
              </FlexItem>
            </Flex>
            {item.opened ? (
              <Box px={AccordionIndent[indent]} pb={4}>
                {typeof item.content === 'string' ? (
                  <Paragraph size="m">{item.content}</Paragraph>
                ) : (
                  item.content
                )}
              </Box>
            ) : null}
          </Card>
        ))}
      </Box>
    )}
  />
)

Accordion.defaultProps = {
  bg: '#fff',
  indent: 'm',
}

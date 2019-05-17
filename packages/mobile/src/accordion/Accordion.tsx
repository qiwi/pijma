import React, {FunctionComponent, ReactNode} from 'react'

import {AccordionControl, Box, Card, Flex, FlexItem} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Paragraph} from '../typography'

export interface AccordionProps<I> {
  items: I[]
}

export interface AccordionItemModel {
  title: string
  content: ReactNode
  bg: string
}

const Accordion: FunctionComponent<
  AccordionProps<AccordionItemModel>
> = props => (
  <AccordionControl<AccordionItemModel>
    items={props.items}
    children={renderProps => (
      <Box onMouseLeave={renderProps.onMouseLeave}>
        {renderProps.items.map((item, index) => (
          <Card
            key={index}
            s={
              index + 1 === renderProps.items.length
                ? undefined
                : '0 1px 0 #e6e6e6'
            }
            transition="box-shadow 3ms, border-bottom-color 100ms"
            onMouseEnter={item.onMouseEnter}
          >
            <Flex
              wrap="nowrap"
              justify="space-between"
              align="start"
              cursor="pointer"
              px={4}
              pt={4}
              pb={item.opened ? 1 : 4}
              onClick={item.onClick}
            >
              <Paragraph bold size="s">
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
              <Box px={4} pb={4}>
                {typeof item.content === 'string' ? (
                  <Paragraph size="s">{item.content}</Paragraph>
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

export default Accordion

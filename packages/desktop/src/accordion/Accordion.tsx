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
}

const Accordion: FunctionComponent<
  AccordionProps<AccordionItemModel>
> = props => (
  <AccordionControl<AccordionItemModel>
    items={props.items}
    children={renderProps => (
      <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" py={3}>
        <Box onMouseLeave={renderProps.onMouseLeave}>
          {renderProps.items.map((item, index) => (
            <Card
              key={index}
              onMouseEnter={item.onMouseEnter}
              bb={
                index + 1 === renderProps.items.length
                  ? ''
                  : item.hovered
                  ? '1px solid transparent'
                  : '1px solid #e6e6e6'
              }
              bt={item.hovered ? '1px solid white' : ''}
              mt={item.hovered ? '-1px' : 0}
              s={item.hovered ? '0 0 16px 0 rgba(0, 0, 0, 0.12)' : undefined}
              transition="box-shadow 3ms, border-bottom-color 100ms"
            >
              <Flex
                onClick={item.onClick}
                wrap="nowrap"
                justify="space-between"
                align="start"
                cursor="pointer"
                px={8}
                pt={4}
                pb={item.opened ? 2 : 4}
              >
                <Paragraph bold size="m">
                  {item.title}
                </Paragraph>
                <FlexItem shrink={0} width={6} height={6} ml={3}>
                  <Box
                    transform={`rotate(${item.opened ? 180 : 0}deg)`}
                    transition="transform 0.3s ease-in-out"
                  >
                    <Icon name="angle-small-down" />
                  </Box>
                </FlexItem>
              </Flex>
              {item.opened ? (
                <Box px={8} pb={4}>
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
      </Card>
    )}
  />
)

export default Accordion

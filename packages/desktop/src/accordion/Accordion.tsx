import React, {FunctionComponent, ReactNode} from 'react'

import {AccordionControl, Box, Card, Flex, FlexItem} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Paragraph} from '../typography'

export interface AccordionProps<I> {
  items: I[]
  bg: string
  px?: 's' | 'm' | 'l'
}

export interface AccordionItemModel {
  title: string
  content: ReactNode
}

const AccordionPx: { [size in NonNullable<AccordionProps<AccordionItemModel>['px']>]: number } = {
  s: 8,
  m: 11,
  l: 17,
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
            bg={item.hovered ? props.bg : undefined}
            s={
              item.hovered
                ? '0 0 16px 0 rgba(0, 0, 0, 0.12)'
                : index + 1 === renderProps.items.length
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
              px={props.px === undefined ? AccordionPx.s : AccordionPx[props.px]}
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
              <Box px={props.px === undefined ? AccordionPx.s : AccordionPx[props.px]} pb={4}>
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

export default Accordion

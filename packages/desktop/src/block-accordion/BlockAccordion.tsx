import React, {FunctionComponent, ReactNode} from 'react'

import {AccordionControl, Box, Card, Flex, FlexItem} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Paragraph} from '../typography'

export interface BlockAccordionProps<I> {
  items: I[]
  opened: number[]
  indent?: 's' | 'm' | 'l'
  tabIndex?: number
  onChange: (opened: number[]) => void
}

export interface BlockAccordionItemModel {
  title: string
  content: ReactNode
}

const BlockAccordionIndent: {
  [indent in NonNullable<BlockAccordionProps<BlockAccordionItemModel>['indent']>]: number
} = {
  s: 8,
  m: 11,
  l: 17,
}

export const BlockAccordion: FunctionComponent<
  BlockAccordionProps<BlockAccordionItemModel>
> = ({items, indent = 'm', tabIndex = 0, opened, onChange}) => (
  <AccordionControl<BlockAccordionItemModel>

    items={items}
    opened={opened}
    onChange={onChange}
    children={renderProps => (
      <Box py={3}>
        {renderProps.items.map((item, index) => (
          <Card
            key={index}
            role="article"
            aria-label={typeof item.title === 'string' ? item.title : undefined}
            s={
              item.hovered || item.focused
                ? '0 0 16px 0 rgba(0, 0, 0, 0.12)'
                : index > 0 &&
                  !(renderProps.items[index - 1].hovered ||
                      renderProps.items[index - 1].focused)
                ? '0 -1px 0 #e6e6e6'
                : undefined
            }
            transition="box-shadow 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            onMouseEnter={item.onMouseEnter}
            onMouseLeave={item.onMouseLeave}
          >
            <Flex
              tabIndex={tabIndex}
              wrap="nowrap"
              justify="space-between"
              align="start"
              cursor="pointer"
              px={BlockAccordionIndent[indent]}
              pt={4}
              pb={item.opened ? 2 : 4}
              onClick={item.onClick}
              onFocus={item.onFocus}
              onBlur={item.onBlur}
              onKeyDown={renderProps.onKeyDown}
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
            <Box px={BlockAccordionIndent[indent]} pb={4} display={item.opened ? 'block' : 'none'}>
              {typeof item.content === 'string' ? (
                <Paragraph size="m">{item.content}</Paragraph>
              ) : (
                item.content
              )}
            </Box>
          </Card>
        ))}
      </Box>
    )}
  />
)

BlockAccordion.defaultProps = {
  indent: 'm',
  tabIndex: 0,
}

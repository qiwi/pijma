import React, {FunctionComponent, ReactNode} from 'react'

import {AccordionControl, Box, Card, Flex, FlexItem, Icon, AccordionRenderChild, AccordionChildItem} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'

export interface BlockAccordionProps<I> {
  items: I[]
  opened: string[]
  tabIndex?: number
  onChange: (opened: string[]) => void
}

export interface BlockAccordionItemModel {
  title: string
  content: ReactNode
}

const renderItems = (
  props: BlockAccordionProps<BlockAccordionItemModel>,
  onKeyDown: AccordionRenderChild<BlockAccordionItemModel>['onKeyDown'],
  items: AccordionChildItem<BlockAccordionItemModel>[],
) => {
  const {tabIndex = 0} = props

  return items.map((item, index) => (
      <Card
        key={index}
        s={
          index > 0
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
          px={4}
          pt={4}
          pb={item.opened ? 1 : 4}
          onClick={item.onClick}
          onFocus={item.onFocus}
          onBlur={item.onBlur}
          onKeyDown={onKeyDown}
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
            <Icon name="angle-small-down"/>
          </FlexItem>
        </Flex>
        <Box display={item.opened ? 'block' : 'none'}>
          <Box px={4} pb={4}>
            {typeof item.content === 'string' ? (
              <Paragraph size="s">{item.content}</Paragraph>
            ) : (
              item.content
            )}
          </Box>
          <Box>
            {item.items && renderItems(props, onKeyDown, item.items)}
          </Box>
        </Box>
      </Card>
    ))
}

export const BlockAccordion: FunctionComponent<BlockAccordionProps<BlockAccordionItemModel>> = (props) => {
  const {items, opened, onChange} = props

  return (
    <AccordionControl<BlockAccordionItemModel>
      items={items}
      opened={opened}
      onChange={onChange}
      children={renderProps => (
        <Box py={2}>
          {renderItems(props, renderProps.onKeyDown, renderProps.items)}
        </Box>
      )}
    />
  )
}

BlockAccordion.defaultProps = {
  tabIndex: 0,
}

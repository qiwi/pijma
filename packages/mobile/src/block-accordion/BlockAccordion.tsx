import React, {FunctionComponent, ReactNode} from 'react'

import {AccordionControl, Box, Card, Flex, FlexItem, Icon} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'

interface AccordionOpenedNestedItem {
  [key: number]: (number | AccordionOpenedNestedItem)[]
}
type AccordionOpenedItem = number | AccordionOpenedNestedItem
const openedItemIsNumber = (openedItem: AccordionOpenedItem): openedItem is number =>
  typeof openedItem === 'number'
const openedItemIsNestedItem = (openedItem: AccordionOpenedItem): openedItem is AccordionOpenedNestedItem =>
  typeof openedItem === 'object'

export interface BlockAccordionProps<I> {
  items: I[]
  opened: AccordionOpenedItem[]
  tabIndex?: number
  onChange: (opened: AccordionOpenedItem[]) => void
}

export interface BlockAccordionItemModel {
  title: string
  content: ReactNode
  items?: BlockAccordionItemModel[]
}

class BlockAccordionRecursive extends React.Component<BlockAccordionProps<BlockAccordionItemModel>> {

  private onNestedChange = (index: number): BlockAccordionProps<BlockAccordionItemModel>['onChange'] =>
    (newNestedOpened) => {
      const {opened, onChange} = this.props
      const nestedOpenedItem = opened.find(openedItemIsNestedItem) || {}
      const newNestedOpenedItem = {...nestedOpenedItem, [index]: newNestedOpened}
      const newOpened = [newNestedOpenedItem, ...opened.filter(openedItemIsNumber)]
      onChange(newOpened)
    }

  private getNestedOpened = (index: number): BlockAccordionProps<BlockAccordionItemModel>['opened'] => {
    const nestedOpenedItem = this.props.opened.find(openedItemIsNestedItem)
    return nestedOpenedItem && nestedOpenedItem[index] || []
  }

  render() {
    const {items, tabIndex = 0, opened, onChange} = this.props

    return (
      <AccordionControl<BlockAccordionItemModel>
        items={items}
        opened={opened.filter(openedItemIsNumber)}
        onChange={onChange}
        children={renderProps => (
          <Box>
            {renderProps.items.map((item, index) => (
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
                  onKeyDown={renderProps.onKeyDown}
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
                    {item.items && (
                      <BlockAccordionRecursive
                        items={item.items}
                        tabIndex={tabIndex}
                        opened={this.getNestedOpened(index)}
                        onChange={this.onNestedChange(index)}
                      />
                    )}
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        )}
      />
    )
  }

}

export const BlockAccordion: FunctionComponent<BlockAccordionProps<BlockAccordionItemModel>> = (props) => (
  <Box py={2}>
    <BlockAccordionRecursive {...props} />
  </Box>
)

BlockAccordion.defaultProps = {
  tabIndex: 0,
}

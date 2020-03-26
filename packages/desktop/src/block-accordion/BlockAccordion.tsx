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
  indent?: 's' | 'm' | 'l'
  tabIndex?: number
  onChange: (opened: AccordionOpenedItem[]) => void
}

export interface BlockAccordionItemModel {
  title: string
  content: ReactNode
  items?: BlockAccordionItemModel[]
}

const BlockAccordionIndent: {
  [indent in NonNullable<BlockAccordionProps<BlockAccordionItemModel>['indent']>]: number
} = {
  s: 8,
  m: 11,
  l: 17,
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
    const {items, opened, indent = 'm', tabIndex = 0, onChange} = this.props
    return (
      <AccordionControl<BlockAccordionItemModel>
        items={items}
        opened={opened.filter(openedItemIsNumber)}
        onChange={newCurrentOpened => onChange([...opened.filter(openedItemIsNestedItem), ...newCurrentOpened])}
        children={renderProps => (
          <Box>
            {renderProps.items.map((item, index) => (
              <Card
                key={index}
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
                    <Icon name="angle-small-down"/>
                  </FlexItem>
                </Flex>
                <Box display={item.opened ? 'block' : 'none'}>
                  <Box px={BlockAccordionIndent[indent]} pb={4}>
                    {typeof item.content === 'string' ? (
                      <Paragraph size="m">{item.content}</Paragraph>
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
                        indent={indent}
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
  <Box py={3}>
    <BlockAccordionRecursive {...props} />
  </Box>
)

BlockAccordion.defaultProps = {
  indent: 'm',
  tabIndex: 0,
}

import {BaseMenuItem, Card, Flex, FlexItem, Icon} from '@qiwi/pijma-core'
import React, {Component} from 'react'

import {SelectMenuItem} from './SelectMenuItem'
import {Text} from '../typography'

export interface SelectMenuProps<Item extends BaseMenuItem = BaseMenuItem> {
  /**
   * Menu html id and item ids prefix
   */
  id: string
  /**
   * Active menu item id
   */
  selected: string
  items: Item[]
  onSelect: (item: Item) => void
}

export interface SelectMenuState {
  expanded: boolean
}

export class SelectMenu<
  Item extends BaseMenuItem = BaseMenuItem
> extends Component<SelectMenuProps<Item>, SelectMenuState> {

  state: SelectMenuState = {
    expanded: false,
  }

  protected toggle(item: Item) {
    this.setState({expanded: !this.state.expanded})
    this.props.onSelect(item)
  }

  render() {
    const {
      toggle,
      state: {expanded},
      props: {items, selected, id},
    } = this
    const activeItem = items.find(item => item.id === selected) || items[0]
    return (
      <Card
        id={id}
        r={10}
        bg="#fff"
        s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"
        py={expanded ? 3 : 0}
      >
        <Flex
          id={`${id}-active`}
          cursor="pointer"
          justify="space-between"
          py={2}
          px={4}
          onClick={toggle.bind(this, activeItem)}
        >
          <FlexItem id={`${id}-text-wrapper`} shrink={0} grow={1}>
            <Text children={activeItem.title} size="m" />
          </FlexItem>
          <FlexItem id={`${id}-icon`} shrink={0} width={6} height={6}>
            <Icon name={expanded ? 'angle-up' : 'angle-down'} />
          </FlexItem>
        </Flex>

        {expanded && (
          <Flex
            id={`${id}-items`}
            as="nav"
            direction="column"
            children={items.map(item =>
              item.id === selected ? null : (
                <SelectMenuItem
                  key={item.id}
                  id={`${id}-item-${item.id}`}
                  onClick={toggle.bind(this, item)}
                  children={item.title}
                />
              ),
            )}
          />
        )}
      </Card>
    )
  }

}

import {BaseMenuItem, styled, Flex, Card} from '@qiwi/pijma-core'
import React from 'react'

import {HorizontalMenuItem} from './HorizontalMenuItem'

// @see https://iamsteve.me/blog/entry/using-flexbox-for-horizontal-scrolling-navigation
const ScrollableFlex = styled(Flex)({
  overflowX: 'auto',
  webkitOverflowScrolling: 'auto',
  msOverflowStyle: '-ms-autohiding-scrollbar',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export interface HorizontalMenuProps<Item extends BaseMenuItem = BaseMenuItem> {
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

export const HorizontalMenu = <Item extends BaseMenuItem>({
  items,
  onSelect,
  selected,
  id,
}: HorizontalMenuProps<Item>) => (
  <Card
    id={id}
    bb="1px solid #e6e6e6"
    children={
      <ScrollableFlex
        id={`${id}-wrap`}
        as="nav"
        wrap="nowrap"
        px={4}
        children={items.map((item, index) => (
          <HorizontalMenuItem
            id={`${id}-${item.id}`}
            active={selected === item.id}
            key={item.id}
            isLast={index === items.length - 1}
            onClick={onSelect.bind(null, item)}
            children={item.title}
          />
        ))}
      />
    }
  />
)

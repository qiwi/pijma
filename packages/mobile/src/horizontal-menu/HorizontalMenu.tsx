import {BaseMenuItem, ButtonControl, styled} from '@qiwi/pijma-core'
import React from 'react'

import {HorizontalMenuItem} from './HorizontalMenuItem'

// @see https://iamsteve.me/blog/entry/using-flexbox-for-horizontal-scrolling-navigation
export const HorizontalMenuContainer = styled('nav')(({theme}) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  webkitOverflowScrolling: 'auto',
  msOverflowStyle: '-ms-autohiding-scrollbar',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '&:last-child': {
    marginRight: 0,
  },
  paddingLeft: '16px',
  paddingRight: '16px',
  borderBottom: '1px solid ' + theme.color.gray.light,
}))

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
  <HorizontalMenuContainer
    id={id}
    children={items.map(item => (
      <ButtonControl
        key={item.id}
        onClick={onSelect.bind(null, item)}
        children={renderProps => (
          <HorizontalMenuItem
            id={`${id}-${item.id}`}
            active={selected === item.id}
            onClick={renderProps.onClick}
            children={item.title}
          />
        )}
      />
    ))}
  />
)

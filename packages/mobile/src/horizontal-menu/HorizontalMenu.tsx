import {BaseMenuItem, ButtonControl, styled} from '@qiwi/pijma-core'
import React, {ReactNode} from 'react'

import {HorizontalMenuItem} from './HorizontalMenuItem'

export interface HorizontalMenuRenderItemProps<Item extends BaseMenuItem> {
  /**
   * Html item id
   */
  id: string
  item: Item
  active: boolean
  onClick: () => void
}

const horizontalMenuRenderItemDefault = <Item extends BaseMenuItem>({
  item,
  active,
  id,
  onClick,
}: HorizontalMenuRenderItemProps<Item>): ReactNode => (
  <ButtonControl
    key={item.id}
    onClick={onClick}
    children={renderProps => (
      <HorizontalMenuItem
        active={active}
        onClick={renderProps.onClick}
        id={id}
        children={item.title}
      />
    )}
  />
)

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
  activeId: string
  items: Item[]
  onClick: (item: Item) => void
  renderItem: (props: HorizontalMenuRenderItemProps<Item>) => ReactNode
}

// Do not use React.FC
// See https://github.com/sw-yx/react-typescript-cheatsheet#typing-defaultprops
export const HorizontalMenu = <Item extends BaseMenuItem = BaseMenuItem>({
  items,
  renderItem,
  onClick,
  activeId,
  id,
}: HorizontalMenuProps<Item>) => (
  <HorizontalMenuContainer
    id={id}
    children={items.map(item =>
      renderItem({
        item,
        id: `${id}-${item.id}`,
        active: item.id === activeId,
        onClick: onClick.bind(null, item),
      })
    )}
  />
)
HorizontalMenu.defaultProps = {
  renderItem: horizontalMenuRenderItemDefault,
}

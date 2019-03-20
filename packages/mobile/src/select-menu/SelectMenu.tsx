import {
  BaseMenuItem,
  ButtonControl,
  Card,
  Flex,
  FlexItem,
  Icon,
  styled,
} from '@qiwi/pijma-core'
import React, {Component, ReactNode} from 'react'

import {SelectMenuItem} from './SelectMenuItem'

export interface SelectMenuRenderItemProps<Item extends BaseMenuItem> {
  /**
   * Html item id
   */
  id: string
  item: Item
  onClick: () => void
}

const selectMenuRenderItemDefault = <Item extends BaseMenuItem>({
  item,
  id,
  onClick,
}: SelectMenuRenderItemProps<Item>): ReactNode => (
  <ButtonControl
    key={item.id}
    onClick={onClick}
    children={renderProps => (
      <SelectMenuItem
        id={id}
        onClick={renderProps.onClick}
        children={item.title}
      />
    )}
  />
)

export const SelectMenuActiveItemContainer = styled(Flex)(({theme}) => ({
  fontWeight: theme.font.weight.normal,
  fontFamily: theme.font.family,
  fontSize: '16px',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  whiteSpace: 'nowrap',
}))

export interface SelectMenuRenderActiveItemProps<Item extends BaseMenuItem>
  extends SelectMenuRenderItemProps<Item> {
  expanded: boolean
}

const selectMenuRenderActiveItemDefault = <Item extends BaseMenuItem>({
  item,
  id,
  onClick,
  expanded,
}: SelectMenuRenderActiveItemProps<Item>) => (
  <SelectMenuActiveItemContainer id={id} onClick={onClick} role="button">
    <FlexItem id={`${id}-text`} shrink={0} grow={1}>
      {item.title}
    </FlexItem>
    <FlexItem id={`${id}-icon`} shrink={0} width={6} height={6}>
      <Icon name={expanded ? 'angle-up' : 'angle-down'} />
    </FlexItem>
  </SelectMenuActiveItemContainer>
)

// Flex.withComponent('nav') not working
export const SelectMenuActiveItemsContainer = styled('nav')({
  flexDirection: 'column',
  display: 'flex',
})

export interface SelectMenuProps<Item extends BaseMenuItem = BaseMenuItem> {
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
  renderItem: (props: SelectMenuRenderItemProps<Item>) => ReactNode
  renderActiveItem: (props: SelectMenuRenderActiveItemProps<Item>) => ReactNode
}

export interface SelectMenuState {
  expanded: boolean
}

export class SelectMenu<
  Item extends BaseMenuItem = BaseMenuItem
> extends Component<SelectMenuProps<Item>, SelectMenuState> {
  static defaultProps = {
    renderItem: selectMenuRenderItemDefault,
    renderActiveItem: selectMenuRenderActiveItemDefault,
  }

  state: SelectMenuState = {
    expanded: false,
  }

  protected toggle(item: Item) {
    this.setState({expanded: !this.state.expanded})
    this.props.onClick(item)
  }

  render() {
    const {
      toggle,
      state: {expanded},
      props: {items, renderItem, renderActiveItem, activeId, id},
    } = this
    const activeItem = items.find(item => item.id === activeId) || items[0]
    return (
      <Card
        id={id}
        r={10}
        bg='#fff'
        s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"
        py={expanded ? 3 : 0}
      >
        {renderActiveItem({
          id: `${id}-active`,
          item: activeItem,
          expanded,
          onClick: toggle.bind(this, activeItem),
        })}

        {expanded && (
          <SelectMenuActiveItemsContainer id={`${id}-items`}>
            {items.map(item =>
              item.id === activeId
                ? null
                : renderItem({
                    item,
                    id: `${id}-item-${item.id}`,
                    onClick: toggle.bind(this, item),
                  })
            )}
          </SelectMenuActiveItemsContainer>
        )}
      </Card>
    )
  }
}

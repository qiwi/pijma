import { styled } from '@qiwi/pijma-core'
import React, { Component } from 'react'

import { Menu } from '../menu'
import NavigationMenuProps from './NavigationMenuProps'

const ItemWrap = styled('div')`
  padding: 28px 0 24px;
  font-size: 15px;
`

export class NavigationMenu extends Component<NavigationMenuProps> {
  render() {
    const Link = this.props.link
    const { items, isItemSelected, onChange } = this.props

    const menuItems = items.map(
      ({ name, path, node: _node, value: _value }) => {
        let node = _node
        let value = _value
        if (path) {
          node = (
            <Link to={path}>
              <ItemWrap>{name}</ItemWrap>
            </Link>
          )
          value = path
        }
        return { name, value, node }
      },
    )

    return (
      <Menu
        default={this.props.active}
        items={menuItems}
        isItemSelected={isItemSelected}
        onChange={onChange}
      />
    )
  }
}

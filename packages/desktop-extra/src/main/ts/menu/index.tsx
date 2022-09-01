import { css, Flex, styled } from '@qiwi/pijma-core'
import React, { Component } from 'react'

import { COLOR } from '../theme'
import { TMenuItem } from './interfaces'
import MenuProps from './MenuProps'

const MenuContainer = styled('nav')`
  ul {
    display: block;
    width: 100%;
  }
`

const MenuItemCss = css`
  float: left;
  display: inline-block;
  margin-right: 20px;
  padding-bottom: 4px;
  font-size: 12pt;
  color: ${COLOR.TEXT.Primary};
  * {
    color: ${COLOR.TEXT.Primary};
  }
  :hover {
    cursor: pointer;
  }
`

const MenuItemActiveCss = css`
  float: left;
  display: inline-block;
  margin-right: 20px;
  font-size: 12pt;
  font-weight: 500;
  color: ${COLOR.TEXT.Primary} !important;
  :after {
    width: 100%;
    bottom: 0;
    height: 4px;
    content: '';
    background-color: ${COLOR.BRAND.Primary};
    border-radius: 2px 2px 0 0;
    display: block;
    margin-top: 4px;
  }
  * {
    color: ${COLOR.TEXT.Primary} !important;
  }
  :hover {
    cursor: pointer;
  }
`

const MenuItem = styled('li')``

export class Menu extends Component<MenuProps> {
  constructor(props: MenuProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  getItemCss(item: any) {
    const { isItemSelected } = this.props
    const active = isItemSelected
      ? isItemSelected(item)
      : item === this.props.default

    return active ? [MenuItemActiveCss] : [MenuItemCss]
  }

  render() {
    const { items, flexProps } = this.props

    return (
      <MenuContainer>
        <ul>
          <Flex justify="space-around" {...flexProps}>
            {items.map(this.renderItem.bind(this))}
          </Flex>
        </ul>
      </MenuContainer>
    )
  }

  renderItem(item: undefined | string | TMenuItem, i: number) {
    if (item === undefined) {
      return null
    }

    let key
    let style
    let onClick
    let content

    if (typeof item === 'string') {
      key = i
      style = this.getItemCss(item)
      onClick = this.onClick.bind(this, item, item, key)
      content = item
    }

    if (typeof item === 'object') {
      const { name, value, node } = item
      key = (value && value.value) || value || i
      style = this.getItemCss(value)
      onClick = this.onClick.bind(this, name, value, key)
      content = node || name
    }

    return (
      <MenuItem
        // @ts-ignore
        css={style}
        key={key}
        onClick={onClick}
      >
        {content}
      </MenuItem>
    )
  }

  onClick(name: any, value: any, key: any) {
    const next = value || name || key
    const onChange =
      this.props.onChange ||
      (() => {
        /* noop */
      })

    if (this.props.default !== next) {
      this.setState({ active: next })
      onChange(next)
    }
  }
}

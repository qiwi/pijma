import React from 'react'

import RenderChild from '../RenderChild'

export interface MenuItem {
  href: string
  title: string
  target?: string
  rel?: string
}

export interface TopLevelMenuItem {
  href: string
  title: string
  target?: string
  rel?: string
  items?: MenuItem[]
}

export interface MenuControlProps {
  items: TopLevelMenuItem[]
  children: RenderChild<{
    show: boolean
    active: TopLevelMenuItem | null
    items: TopLevelMenuItem[]
    onShow: () => void
    onHide: () => void
    goBack: () => void
    onItemClick: (active?: string) => void
  }>
}

export interface MenuControlState {
  show: boolean
  active?: string
}

export class MenuControl extends React.Component<MenuControlProps, MenuControlState> {

  public state: MenuControlState = {
    show: false,
  }

  private onShow = () => this.setState({show: true})
  private onHide = () => this.setState({show: false})
  private onItemClick = (active?: string) => this.setState({active})
  private goBack = () => this.setState({active: undefined})

  public render() {
    const activeItem = this.state.active && this.props.items.find(item => item.href === this.state.active)
    return this.props.children({
      show: this.state.show,
      active: activeItem || null,
      items: activeItem ? (activeItem.items || []) : this.props.items,
      onShow: this.onShow,
      onHide: this.onHide,
      onItemClick: this.onItemClick,
      goBack: this.goBack,
    })
  }

}

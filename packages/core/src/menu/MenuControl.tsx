import {PureComponent} from 'react'

import RenderChild from '../RenderChild'
import {MenuLevel, BaseMenuItem, MenuLevelBuilder} from './MenuLevelBuilder'

export interface MenuControlProps<Item extends BaseMenuItem> {
  items: Item[]
  selected: string
  children: RenderChild<{
    levels: MenuLevel<Item>[]
  }>
}

export class MenuControl<Item extends BaseMenuItem> extends PureComponent<
  MenuControlProps<Item>
> {

  render() {
    const {props} = this
    return props.children({
      levels: new MenuLevelBuilder(props.items).levels(props.selected),
    })
  }

}

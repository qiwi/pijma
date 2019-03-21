import {ReactNode} from 'react'

export interface BaseMenuItem {
  id: string
  title: ReactNode
}

export type MenuTree<Item extends BaseMenuItem> = Item & {
  sub?: MenuTree<Item>[]
}

export type MenuLevel<Item extends BaseMenuItem> = {
  items: Item[]
  selected: string
} | undefined

export class MenuLevelBuilder<Item extends BaseMenuItem> {
  constructor(protected items: MenuTree<Item>[]) {}

  protected buildLevels(
    selected: string,
    items: MenuTree<Item>[],
    levels: MenuLevel<Item>[],
    depth = 0,
    parentActive = false
  ): boolean {
    if (levels.length <= depth) levels.push(undefined)
    let activeItem: MenuTree<Item> | undefined
    for (let item of items) {
      const currentActive = item.id === selected
      const sub = item.sub
      const childActive =
        sub && sub.length > 0
          ? this.buildLevels(
              selected,
              sub,
              levels,
              depth + 1,
              currentActive || parentActive
            )
          : false
      if (currentActive) activeItem = item
      if (childActive && !activeItem) activeItem = item
    }

    if (activeItem || parentActive) {
      levels[depth] = {
        items,
        selected: activeItem ? activeItem.id : items[0].id
      }
    }

    return !!activeItem
  }

  /**
   * Split MenuTree structure to levels.
   * Returns array, where index is a menu level.
   *
   * @param selected current menu item id
   */
  levels(selected: string): MenuLevel<Item>[] {
    const result: MenuLevel<Item>[] = []
    this.buildLevels(selected, this.items, result)
    return result
  }
}

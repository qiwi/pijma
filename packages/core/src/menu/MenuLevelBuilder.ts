import {ReactNode} from 'react'

export interface BaseMenuItem {
  id: string
  title: ReactNode
}

export type MenuTree<Item extends BaseMenuItem> = Item & {
  sub?: MenuTree<Item>[]
}

export class MenuLevel<Item extends BaseMenuItem> {
  constructor(public items: Item[], public activeId: string) {}
}

export class MenuLevelBuilder<Item extends BaseMenuItem> {
  constructor(protected items: MenuTree<Item>[]) {}

  protected buildLevels(
    activeId: string,
    items: MenuTree<Item>[],
    levels: (MenuLevel<Item> | undefined)[],
    depth = 0,
    parentActive = false
  ): boolean {
    if (levels.length <= depth) levels.push(undefined)
    let activeItem: MenuTree<Item> | undefined
    for (let item of items) {
      const currentActive = item.id === activeId
      const sub = item.sub
      const childActive =
        sub && sub.length > 0
          ? this.buildLevels(
              activeId,
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
      levels[depth] = new MenuLevel(
        items,
        activeItem ? activeItem.id : items[0].id
      )
    }

    return !!activeItem
  }

  /**
   * Split MenuTree structure to levels.
   * Returns array, where index is a menu level.
   *
   * @param activeId current menu item id
   */
  levels(activeId: string): (MenuLevel<Item> | undefined)[] {
    const result: (MenuLevel<Item>[] | undefined) = []
    this.buildLevels(activeId, this.items, result)
    return result
  }
}

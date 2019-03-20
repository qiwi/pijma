import {BaseMenuItem, Box, MenuLevelBuilder} from '@qiwi/pijma-core'
import React, {Component} from 'react'

import {HorizontalMenu} from '../horizontal-menu'
import {SelectMenu} from '../select-menu'

export interface LevelMenuProps<Item extends BaseMenuItem> {
  id: string
  activeId: string
  items: Item[]
  onClick: (item: Item) => void
}

export class LevelMenu<Item extends BaseMenuItem> extends Component<
  LevelMenuProps<Item>
> {
  render() {
    const {
      props: {id, onClick, activeId, items},
    } = this
    const levels = new MenuLevelBuilder(items).levels(activeId)
    const level0 = levels[0]
    const level1 = levels[1]
    const level2 = levels[2]
    return (
      <div id={id}>
        {level0 && (
          <HorizontalMenu
            id={`${id}-0`}
            items={level0.items}
            onClick={onClick}
            activeId={level0.activeId}
          />
        )}
        {level1 && (
          <Box id={`${id}-1-wrapper`} mt={4}>
            <SelectMenu
              id={`${id}-1`}
              items={level1.items}
              onClick={onClick}
              activeId={level1.activeId}
            />
          </Box>
        )}
        {level2 && (
          <Box id={`${id}-2-wrapper`} mt={4}>
            <SelectMenu
              id={`${id}-2`}
              items={level2.items}
              onClick={onClick}
              activeId={level2.activeId}
            />
          </Box>
        )}
      </div>
    )
  }
}

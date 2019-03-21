import {BaseMenuItem, Box, MenuControl} from '@qiwi/pijma-core'
import React, {Fragment} from 'react'

import {HorizontalMenu} from '../horizontal-menu'
import {SelectMenu} from '../select-menu'

export interface LevelMenuProps<Item extends BaseMenuItem> {
  id: string
  selected: string
  items: Item[]
  onSelect: (item: Item) => void
}

export const LevelMenu = <Item extends BaseMenuItem>({
  id,
  onSelect,
  selected,
  items,
}: LevelMenuProps<Item>) => (
  <MenuControl
    items={items}
    selected={selected}
    children={({levels: [level0, level1, level2]}) => (
      <Fragment>
        {level0 && (
          <HorizontalMenu
            id={`${id}-0`}
            items={level0.items}
            onSelect={onSelect}
            selected={level0.selected}
          />
        )}
        {level1 && (
          <Box id={`${id}-1-wrapper`} mt={4}>
            <SelectMenu
              id={`${id}-1`}
              items={level1.items}
              onSelect={onSelect}
              selected={level1.selected}
            />
          </Box>
        )}
        {level2 && (
          <Box id={`${id}-2-wrapper`} mt={4}>
            <SelectMenu
              id={`${id}-2`}
              items={level2.items}
              onSelect={onSelect}
              selected={level2.selected}
            />
          </Box>
        )}
      </Fragment>
    )}
  />
)

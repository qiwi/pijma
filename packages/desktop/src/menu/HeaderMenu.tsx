import React, {FC} from 'react'

import {Flex} from '@qiwi/pijma-core'
import {HeaderMenuItem} from './HeaderMenuItem'

import {HeaderMenuItemProps} from './HeaderMenuItemProps'

export interface HeaderMenuProps {
  items: HeaderMenuItemProps[]
}

export const HeaderMenu: FC<HeaderMenuProps> = props => (
  <Flex height={1} width={1} justify="flex-start" mr={-3} ml={-3}>
    {props.items.map((item, i) => (
      <HeaderMenuItem
        {...item}
        key={i}
      >
        {item.title}
      </HeaderMenuItem>
    ))}
  </Flex>
)

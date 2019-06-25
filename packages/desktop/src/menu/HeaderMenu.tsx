import React, {FC} from 'react'

import {Flex} from '@qiwi/pijma-core'
import {HeaderMenuItem} from './HeaderMenuItem'

import {HeaderMenuItemProps} from './HeaderMenuItemProps'

export interface HeaderMenuProps {
  onChange?: (id: number) => void
  items: HeaderMenuItemProps[]
  active?: number
}

export const HeaderMenu: FC<HeaderMenuProps> = props => (
  <Flex height={1} width={1} justify="flex-start">
    {props.items.map((item, i) => (
      <HeaderMenuItem
        {...item}
        active={Boolean(props.active) && props.active === item.id}
        key={item.id}
        id={item.id}
        ml={i > 0 ? 6 : 0}
        onClick={props.onChange}
      >
        {item.title}
      </HeaderMenuItem>
    ))}
  </Flex>
)

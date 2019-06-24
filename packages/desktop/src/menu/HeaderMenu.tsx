import React, {FC} from 'react'

import {Flex} from '@qiwi/pijma-core'
import {HeaderMenuItem} from './HeaderMenuItem'

interface MenuItem {
  id: number
  href?: string
  title: string
  target?: string
  rel?: string
}

export interface HeaderMenuProps {
  onChange?: (id: number) => void
  items: MenuItem[]
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

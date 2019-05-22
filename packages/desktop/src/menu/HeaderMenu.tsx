import React, {FC} from 'react'

import {Flex} from '@qiwi/pijma-core'
import {HeaderLink} from './HeaderLink'

interface MenuItem {
  href: string
  title: string
  target?: string
  rel?: string
}

export interface HeaderMenuProps {
  onChange?: (
    href?: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
  ) => void
  items: MenuItem[]
  active?: string
}

export const HeaderMenu: FC<HeaderMenuProps> = props => (
  <Flex height={1} width={1} justify="flex-start">
    {props.items.map((item, i) => (
      <HeaderLink
        {...item}
        active={Boolean(props.active) && props.active === item.href}
        key={i}
        ml={i > 0 ? 6 : 0}
        onClick={props.onChange}
      >
        {item.title}
      </HeaderLink>
    ))}
  </Flex>
)

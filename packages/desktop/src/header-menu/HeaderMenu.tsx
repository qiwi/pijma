import React, {FC} from 'react'

import {Flex, FlexItem} from '@qiwi/pijma-core'
import {HeaderMenuItem} from './HeaderMenuItem'

import {HeaderMenuItemProps} from './HeaderMenuItemProps'

export interface HeaderMenuProps {
  items: HeaderMenuItemProps[]
}

export const HeaderMenu: FC<HeaderMenuProps> = props => (
  <Flex height={1} width={1} justify="flex-start">
    {props.items.map((item, i) => (
      <FlexItem ml={i > 0 ? 6 : 0}>
        <HeaderMenuItem
          {...item}
          key={i}
        >
          {item.title}
        </HeaderMenuItem>
      </FlexItem>
    ))}
  </Flex>
)

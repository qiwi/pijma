import React, {FC} from 'react'

import {Flex, FlexItem} from '@qiwi/pijma-core'
import {HeaderMenuItem, HeaderMenuItemProps} from './HeaderMenuItem'

export interface HeaderMenuProps {
  children: HeaderMenuItemProps[]
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => (
  <Flex height={1} width={1} justify="flex-start">
    {props.children.map((item, i) => (
      <FlexItem ml={i > 0 ? 6 : 0}>
        <HeaderMenuItem
          key={i}
          {...item}
        />
      </FlexItem>
    ))}
  </Flex>
)

import React, {FC} from 'react'

import {Flex, FlexItem, Box} from '@qiwi/pijma-core'
import {HeaderMenuItem, HeaderMenuItemProps} from './HeaderMenuItem'

export interface HeaderMenuProps {
  children: HeaderMenuItemProps[]
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => (
  <Box as="nav" height={1} width={1}>
    <Flex height={1} width={1} justify="flex-start" role="menubar">
      {props.children.map((item, i) => (
        <FlexItem key={i} ml={i > 0 ? 6 : 0}>
          <HeaderMenuItem
            {...item}
          />
        </FlexItem>
      ))}
    </Flex>
  </Box>
)

import { Flex, FlexItem, getDataProps } from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { Link } from '../link'
import { HeaderMenuItem, HeaderMenuItemProps } from './HeaderMenuItem'

export interface HeaderMenuProps {
  children: HeaderMenuItemProps[]
  stub?: Array<number> | boolean
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => (
  <Flex
    {...getDataProps(props).data}
    height={1}
    width={1}
    justify="flex-start"
    role="menu"
  >
    {props.stub
      ? (typeof props.stub === 'boolean' ? [32, 44, 26] : props.stub).map(
          (width, index) => (
            <FlexItem
              key={index}
              ml={index > 0 ? 5 : 0}
              width={width}
              align="center"
            >
              <Link size="m" stub />
            </FlexItem>
          ),
        )
      : props.children.map((item, i) => (
          <FlexItem key={i} ml={i > 0 ? 5 : 0}>
            <HeaderMenuItem {...item} />
          </FlexItem>
        ))}
  </Flex>
)

HeaderMenu.displayName = 'HeaderMenu'

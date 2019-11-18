import React, {FC} from 'react'

import {Flex, FlexItem} from '@qiwi/pijma-core'
import {HeaderMenuItem, HeaderMenuItemProps} from './HeaderMenuItem'
import {Link} from '../link'

export interface HeaderMenuProps {
  children: HeaderMenuItemProps[]
  stub?: Array<number> | boolean
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => (
  <Flex height={1} width={1} justify="flex-start">
    {props.stub ? (
      typeof props.stub === 'boolean' ? (
        [32, 44, 26].map((width, index) => (
          <FlexItem key={index} ml={index > 0 ? 6 : 0} width={width} align="center">
            <Link size="m" stub/>
          </FlexItem>
        ))
      ) : (
        props.stub.map((width, index) => (
          <FlexItem key={index} ml={index > 0 ? 6 : 0} width={width} align="center">
            <Link size="m" stub/>
          </FlexItem>
        ))
      )
    ) : (
      props.children.map((item, i) => (
        <FlexItem key={i} ml={i > 0 ? 6 : 0}>
          <HeaderMenuItem
            {...item}
          />
        </FlexItem>
      ))
    )}
  </Flex>
)

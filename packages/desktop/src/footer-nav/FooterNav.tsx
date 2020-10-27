import React, {FC} from 'react'

import {Box, Flex, FlexItem} from '@qiwi/pijma-core'

import {NavLink, NavLinkProps} from '../nav-link'

export interface FooterNavProps {
  children?: NavLinkProps[]
  stub?: Array<number> | boolean
}

export const FooterNav: FC<FooterNavProps> = ({children = [], stub = false}) => (
  <Box overflow="hidden">
    <Flex wrap="wrap" mx={-2} my={-2.5}>
      {stub ? (
        (typeof stub === 'boolean' ? [32, 40, 26] : stub).map((width, index) => (
          <FlexItem px={2} py={2.5} key={index} width={width}>
            <NavLink stub/>
          </FlexItem>
        ))
      ) : (
        children.map((item, i) => (
          <FlexItem px={2} py={2.5} key={i}>
            <NavLink {...item}/>
          </FlexItem>
        ))
      )}
    </Flex>
  </Box>
)

FooterNav.displayName = 'FooterNav'

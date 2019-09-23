import React, {FC} from 'react'

import {Box, Flex, FlexItem} from '@qiwi/pijma-core'

import {NavLink, NavLinkProps} from '../nav-link'

export interface FooterNavProps {
  children: NavLinkProps[]
}

export const FooterNav: FC<FooterNavProps> = ({children}) => (
  <Box overflow="hidden">
    <Flex wrap="wrap" mx={-2} my={-2.5}>
      {children.map((item, i) => (
        <FlexItem px={2} py={2.5} key={i}>
          <NavLink {...item}/>
        </FlexItem>
      ))}
    </Flex>
  </Box>
)

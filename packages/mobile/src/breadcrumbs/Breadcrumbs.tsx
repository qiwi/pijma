import React, {FC} from 'react'
import {Box, Flex} from '@qiwi/pijma-core'
import {NavLink, NavLinkProps} from '../nav-link'
import {Text} from '../typography'

export interface BreadcrumbsProps {
  children: NavLinkProps[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({children}) => (
  <Flex>
    {children.map((item, i) => (
      <Flex display="inline-flex" align="center" key={i}>
        {i > 0 ? (
          <Box mx={2}>
            <Text
              color="support"
              size="s"
              compact
              children="&#8226;"
            />
          </Box>
        ) : null}
        <NavLink {...item} />
      </Flex>
    ))}
  </Flex>
)

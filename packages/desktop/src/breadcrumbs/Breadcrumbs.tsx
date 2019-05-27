import React, {FC} from 'react'
import {Box} from '@qiwi/pijma-core'
import {NavLink, NavLinkProps} from '../nav-link'
import {Text} from '../typography'

export interface BreadcrumbsProps {
  children: NavLinkProps[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({children}) => (
  <Box>
    {children.map((item, i) => (
      <Box display="inline-flex" key={i}>
        {i > 0 ? (
          <Text
            color="support"
            decoration="none"
            size="s"
            compact
            children="&nbsp;&#8226;&nbsp;"
          />
        ) : null}
        <NavLink {...item}/>
      </Box>
    ))}
  </Box>
)

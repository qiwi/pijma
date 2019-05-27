import React, {FC} from 'react'
import {Box} from '@qiwi/pijma-core'
import {NavLink} from '../nav-link/NavLink'
import {Text} from '../typography'

interface NavLinkProps {
  href: string
  title: string
}

interface BreadcrumbsProps {
  children: NavLinkProps[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({children}) => (
  <Box>
    {children.map((item, i) => (
      <Box display="inline-flex" key={i}>
        {i > 0 ? (
          <Text
            color="support"
            size="s"
            compact
            children="&nbsp;&#8226;&nbsp;"
          />
        ) : null}
        <NavLink children={item.title} href={item.href}/>
      </Box>
    ))}
  </Box>
)

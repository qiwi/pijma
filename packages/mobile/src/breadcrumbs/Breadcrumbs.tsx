import React, {FC} from 'react'
import {Typo, Box, Card} from '@qiwi/pijma-core'
import {NavLink} from '../nav-link/NavLink'

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
          <Card mx={2} width={2} height={5}>
            <Typo
              color="#666"
              decoration="none"
              size={3.5}
              height={4}
              align="center"
              children="&#8226;"
            />
          </Card>
        ) : null}
        <NavLink children={item.title} href={item.href}/>
      </Box>
    ))}
  </Box>
)

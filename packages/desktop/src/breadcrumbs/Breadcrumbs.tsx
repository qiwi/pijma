import React, {FC, Fragment} from 'react'
import {Box} from '@qiwi/pijma-core'
import {NavLink, NavLinkProps} from '../nav-link'
import {Paragraph} from '../typography'

export interface BreadcrumbsProps {
  title?: string
  children: NavLinkProps[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({title, children}) => (
  <Box as="nav" aria-label={title}>
    <Paragraph size="s" color="support">
      {children.map((item, i) => (
        <Fragment key={i} >
          {i > 0 ? (
            <Fragment>
              <Box as="span" mx={2} display="inline">
                &#8226;
              </Box>
              &shy;
            </Fragment>
          ) : (
            null
          )}
          <NavLink {...item} />
        </Fragment>
      ))}
    </Paragraph>
  </Box>
)

import React, { FC, Fragment } from 'react'

import { Box, getDataProps } from '@qiwi/pijma-core'

import { NavLink, NavLinkProps } from '../nav-link'
import { Paragraph } from '../typography'

export interface BreadcrumbsProps {
  children?: NavLinkProps[]
  stub?: boolean
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  children = [],
  stub = false,
  ...rest
}) =>
  stub ? (
    <Box maxWidth={12} width={1}>
      <NavLink stub />
    </Box>
  ) : (
    <Paragraph {...getDataProps(rest)} size="s" color="support">
      {children.map((item, i) => (
        <Fragment key={i}>
          {i > 0 ? (
            <Fragment>
              <Box as="span" mx={2} display="inline">
                &#8226;
              </Box>
              &shy;
            </Fragment>
          ) : null}
          <NavLink {...item} />
        </Fragment>
      ))}
    </Paragraph>
  )

Breadcrumbs.displayName = 'Breadcrumbs'

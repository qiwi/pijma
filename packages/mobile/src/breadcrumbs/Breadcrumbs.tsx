import React, {FC, Fragment} from 'react'
import {Box, Stub} from '@qiwi/pijma-core'
import {NavLink, NavLinkProps} from '../nav-link'
import {Paragraph} from '../typography'

export interface BreadcrumbsProps {
  children: NavLinkProps[]
  stub?: boolean
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({stub, children}) => (
  stub ? (
    <Stub
      height={2}
      width={12}
    />
  ) : (
    <Paragraph size="s" color="support">
      {children.map((item, i) => (
        <Fragment key={i}>
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
  )

)

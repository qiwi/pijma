import React, {FC} from 'react'
import {LinkControl, Lnk, Typo, Box, Card} from '@qiwi/pijma-core'

interface NavLinkProps {
  href: string
  title: string
}

interface BreadcrumbsProps {
  children: NavLinkProps[]
}

const NavLink = Typo.withComponent(Lnk)

export const Breadcrumbs: FC<BreadcrumbsProps> = ({children}) => (
  <Box mb={1} m={0} p={0}>
    {children.map((item, i) => (
      <Box display="inline-block" key={i}>
        <LinkControl
          href={item.href}
          children={renderProps => (
            <NavLink
              href={item.href}
              onClick={renderProps.onClick}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onBlur}
              onMouseEnter={renderProps.onMouseEnter}
              onMouseLeave={renderProps.onMouseLeave}
              onMouseUp={renderProps.onMouseUp}
              onMouseDown={renderProps.onMouseDown}
              color={renderProps.hover || renderProps.focus ? '#000' : '#666'}
              transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
              cursor="pointer"
              decoration="none"
              title={item.title}
              size={3.5}
              height={5}
              css={{verticalAlign: 'middle'}}
              children={item.title}
            />
          )}
        />
        {i + 1 === children.length ? null : (
          <Card
            my={0}
            mx={2}
            display="inline-block"
            width="4px"
            height="4px"
            bg="#666"
            r="50%"
            css={{verticalAlign: 'middle'}}
          />
        )}
      </Box>
    ))}
  </Box>
)

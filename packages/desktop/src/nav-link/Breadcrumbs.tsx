import React, {FC} from 'react'
import {LinkControl, Lnk, Typo, Box, Card} from '@qiwi/pijma-core'

interface Breadcrumb {
  href: string
  title: string
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[]
}

const TypoLink = Typo.withComponent(Lnk)

export const Breadcrumbs: FC<BreadcrumbsProps> = ({breadcrumbs}) => (
  <Box mb={1} m={0} p={0}>
    {breadcrumbs.map((breadcrumb, i) => (
      <Box display="inline-block" key={i}>
        <LinkControl
          href={breadcrumb.href}
          children={renderProps => (
            <TypoLink
              href={breadcrumb.href}
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
              title={breadcrumb.title}
              size={3.5}
              height={5}
              css={{verticalAlign: 'middle'}}
              children={breadcrumb.title}
            />
          )}
        />
        {i + 1 === breadcrumbs.length ? null : (
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

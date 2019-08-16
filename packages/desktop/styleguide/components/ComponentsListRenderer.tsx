import React, {FC, ReactNode} from 'react'

import {Box, Spacer} from '@qiwi/pijma-core'
import {Link} from '@qiwi/pijma-desktop'

interface ComponentsListRendererProps {
  items: Array<{
    heading: boolean
    visibleName: string
    href: string
    content: ReactNode,
    shouldOpenInNewTab: boolean
  }>
}

const ComponentsListRenderer: FC<ComponentsListRendererProps> = (props) => {
  const items = props.items.filter(item => item.visibleName)
  if (!items.length) {
    return null
  }
  const windowHash = window.location.pathname + window.location.hash
  return (
    <Spacer size="l">
      {items.map(({visibleName, href, content, shouldOpenInNewTab}, i) => (
        <Spacer size="l" key={i}>
          <Link
            href={href}
            target={shouldOpenInNewTab ? '_blank' : undefined}
            children={visibleName}
          />
          {windowHash.startsWith(href) ? (
            <Box pl={4}>
              {content}
            </Box>
          ) : (
            null
          )}
        </Spacer>
      ))}
    </Spacer>
  )
}

export default ComponentsListRenderer

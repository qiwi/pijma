import { MenuCaption, MenuLink } from '@qiwi/pijma-mobile'
import React, { FC, Fragment, ReactNode } from 'react'

interface ComponentsListRendererProps {
  items: Array<{
    heading: boolean
    visibleName: string
    href: string
    content: ReactNode
    shouldOpenInNewTab: boolean
  }>
}

const ComponentsListRenderer: FC<ComponentsListRendererProps> = (props) => {
  const items = props.items.filter((item) => item.visibleName)
  if (!items.length) {
    return null
  }
  return (
    <Fragment>
      {items.map(({ visibleName, href, content, shouldOpenInNewTab }, i) =>
        content ? (
          <Fragment key={i}>
            <MenuCaption text={visibleName} />
            {content}
          </Fragment>
        ) : (
          <MenuLink
            key={i}
            href={href}
            target={shouldOpenInNewTab ? '_blank' : undefined}
            title={visibleName}
          />
        ),
      )}
    </Fragment>
  )
}

export default ComponentsListRenderer

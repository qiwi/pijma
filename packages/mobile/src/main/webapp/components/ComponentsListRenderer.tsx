import { Caption, Flex, FlexItem, Link } from '@qiwi/pijma-mobile'
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
  if (items.length === 0) {
    return null
  }
  return (
    <Flex wrap="wrap">
      {items.map(({ visibleName, href, content, shouldOpenInNewTab }, i) => (
        <FlexItem key={i} mr={4} mt={4}>
          {content ? (
            <Fragment>
              <Caption>{visibleName}</Caption>
              {content}
            </Fragment>
          ) : (
            <Link
              key={i}
              href={href}
              target={shouldOpenInNewTab ? '_blank' : undefined}
              title={visibleName}
            >
              {visibleName}
            </Link>
          )}
        </FlexItem>
      ))}
    </Flex>
  )
}

export default ComponentsListRenderer

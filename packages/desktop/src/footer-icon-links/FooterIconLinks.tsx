import React, {FC} from 'react'

import {Flex, FlexItem, Lnk, Card, Icon, IconProps, LinkControl} from '@qiwi/pijma-core'

const CardLink = Card.withComponent(Lnk)

export interface FooterIconLinksProps {
  children: {
    href: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
    title?: string,
    icon: IconProps['name'],
    onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void,
    onFocus?: () => void,
    onBlur?: () => void
  }[]
}

export const FooterIconLinks: FC<FooterIconLinksProps> = ({children}) => (
  <Flex justify="space-between">
    {children.map((item, i) => (
      <FlexItem key={i} width={10} height={10} shrink={0} align="center" justify="center">
        <LinkControl
          href={item.href}
          target={item.target}
          download={item.download}
          rel={item.rel}
          onClick={item.onClick}
          onFocus={item.onFocus}
          onBlur={item.onBlur}
          children={(renderProps) => (
            <CardLink
              display="block"
              r={40}
              p={2}
              s={renderProps.hover || renderProps.focus || renderProps.active ? '0 0 0 1px #000' : '0 0 0 1px #ccc'}
              href={item.href}
              rel={item.rel}
              target={item.target}
              title={item.title}
              download={item.download}
              onClick={renderProps.onClick}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onBlur}
              onMouseEnter={renderProps.onMouseEnter}
              onMouseLeave={renderProps.onMouseLeave}
              onMouseUp={renderProps.onMouseUp}
              onMouseDown={renderProps.onMouseDown}
              children={
                <Icon
                  name={item.icon}
                  color={renderProps.hover || renderProps.focus || renderProps.active ? '#000' : '#999'}
                />
              }
            />
          )}
        />
      </FlexItem>
    ))}
  </Flex>
)

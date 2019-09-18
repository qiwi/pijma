import React, {FC} from 'react'

import {LinkControl} from '@qiwi/pijma-core'
import {Icon, IconProps} from '../icon'
import {Flex, FlexItem, Lnk, Card} from '../primitive'

const CardLink = Card.withComponent(Lnk)

export interface FooterIconLinksProps {
  children: {
    href: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
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
          onClick={item.onClick}
          onFocus={item.onFocus}
          onBlur={item.onBlur}
          href={item.href}
          target={item.target}
          download={item.download}
          rel={item.rel}
          children={(renderProps) => (
            <CardLink
              display="block"
              r={40}
              p={2}
              s={renderProps.hover || renderProps.focus || renderProps.active ? '0 0 0 1px #000' : '0 0 0 1px #ccc'}
              href={item.href}
              onClick={renderProps.onClick}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onBlur}
              onMouseEnter={renderProps.onMouseEnter}
              onMouseLeave={renderProps.onMouseLeave}
              onMouseUp={renderProps.onMouseUp}
              onMouseDown={renderProps.onMouseDown}
              target={item.target}
              download={item.download}
            >
              <Icon color={renderProps.hover || renderProps.focus || renderProps.active ? '#000' : '#999'} name={item.icon}/>
            </CardLink>
          )}
        />
      </FlexItem>
    ))}
  </Flex>
)

import React, {FC, ReactNode} from 'react'

import {Box, Lnk, LinkControl, Flex, FlexItem} from '@qiwi/pijma-core'

const BoxLink = Box.withComponent(Lnk)

interface FooterAppLinkProps {
  href: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  icon: ReactNode
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const FooterAppLink: FC<FooterAppLinkProps> = (props) => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <BoxLink
        href={props.href}
        rel={props.rel}
        target={props.target}
        title={props.title}
        download={props.download}
        width={1}
        height={1}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        children={props.icon}
      />
    )}
  />
)

export interface FooterAppProps {
  children: FooterAppLinkProps[]
}

export const FooterApp: FC<FooterAppProps> = ({children}) => (
  <Flex justify="space-between" maxWidth={children.length * 45 - 6}>
    {children.map((item, i) => (
      <FlexItem
        key={i}
        shrink={1}
        maxWidth={39}
        maxHeight={11.5}
        ml={i === 0 ? undefined : 6}
        children={<FooterAppLink {...item}/>}
      />
    ))}
  </Flex>
)

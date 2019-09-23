import React, {FC, ReactElement} from 'react'

import {Box, Lnk, LinkControl, Flex, FlexItem} from '@qiwi/pijma-core'

const BoxLink = Box.withComponent(Lnk)

interface FooterAppLinkProps {
  href: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  icon: ReactElement
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
        display="block"
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
  <Box overflow="hidden">
    <Flex justify="space-between" m={-2}>
      {children.map((item, i) => (
        <FlexItem
          key={i}
          shrink={1}
          maxWidth={42}
          maxHeight={12.4}
          m={2}
          children={<FooterAppLink {...item}/>}
        />
      ))}
    </Flex>
  </Box>
)

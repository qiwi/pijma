import React, {FC, ReactElement} from 'react'

import {Box, Lnk, LinkControl, Flex, FlexItem, Stub} from '@qiwi/pijma-core'

const BoxLink = Box.withComponent(Lnk)

interface FooterAppLinkProps {
  href: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  icon: ReactElement
  stub?: boolean
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const FooterAppLink: FC<FooterAppLinkProps> = (props) => (
  props.stub ? (
    <Stub width={1} height={1}/>
  ) : (
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
)

export interface FooterAppProps {
  children: FooterAppLinkProps[]
  stub?: boolean
}

export const FooterApp: FC<FooterAppProps> = ({children, stub = false}) => (
  <Box overflow="hidden">
    <Flex m={-2} justify="space-between">
      {(stub ? Array(2).fill(0) : children).map((item, i) => (
        <FlexItem
          key={i}
          shrink={1}
          grow={1}
          minWidth={37}
          minHeight={11}
          maxWidth={42}
          maxHeight={13}
          m={2}
          children={<FooterAppLink stub={stub} {...item}/>}
        />
      ))}
    </Flex>
  </Box>
)

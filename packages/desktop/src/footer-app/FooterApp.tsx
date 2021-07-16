import React, {FC, ReactElement} from 'react'

import {styled, Box, Lnk, LinkControl, Stub, FlexItem, Flex, BoxOptions} from '@qiwi/pijma-core'

const BoxLink = styled(Box, BoxOptions)().withComponent(Lnk)

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
    <Stub width={1} height={1} r={8}/>
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
  stub?: boolean
  children: FooterAppLinkProps[]
}

export const FooterApp: FC<FooterAppProps> = ({children, stub = false}) => (
  <Flex>
    {(stub ? Array(3).fill(0) : children).map((item, i) => (
      <FlexItem
        key={i}
        width={32}
        height={10}
        ml={i > 0 ? 4 : 0}
        children={<FooterAppLink stub={stub} {...item}/>}
      />
    ))}
  </Flex>
)

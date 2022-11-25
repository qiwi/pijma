import { BoxLnk, Flex, FlexItem, LinkControl, Stub } from '@qiwi/pijma-core'
import React, { FC, ReactElement } from 'react'

type FooterAppLinkProps =
  | {
      stub?: false
      href: string
      target?: string
      download?: string | boolean
      rel?: string
      title?: string
      icon: ReactElement
      onClick?: (
        href?: string,
        target?: string,
        download?: string | boolean,
        rel?: string,
      ) => void
      onFocus?: () => void
      onBlur?: () => void
    }
  | {
      stub: true
    }

const FooterAppLink: FC<FooterAppLinkProps> = (props) =>
  props.stub ? (
    <Stub width={1} height={1} r={8} />
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
        <BoxLnk
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

FooterAppLink.displayName = 'FooterAppLink'

export interface FooterAppProps {
  stub?: boolean
  children: FooterAppLinkProps[]
}

export const FooterApp: FC<FooterAppProps> = ({ children, stub = false }) => (
  <Flex wrap="wrap" width={68} justify="space-between">
    {(stub
      ? Array.from<FooterAppLinkProps>({ length: 3 }).fill({ stub })
      : children
    ).map((item, i) => (
      <FlexItem
        key={i}
        mt={i > 1 ? 3 : 0}
        width={32}
        height={10}
        children={<FooterAppLink stub={stub} {...item} />}
      />
    ))}
  </Flex>
)

FooterApp.displayName = 'FooterApp'

import React, {FC} from 'react'

import {Lnk, Card, Icon, IconProps, LinkControl, Flex, FlexItem, Box, Stub} from '@qiwi/pijma-core'

const CardLink = Card.withComponent(Lnk)

interface FooterOutLinkProps {
  href: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  icon: IconProps['name']
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const FooterOutLink: FC<FooterOutLinkProps> = (props) => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <CardLink
        display="block"
        width={10}
        height={10}
        r={40}
        p={1.75}
        b={renderProps.hover || renderProps.focus || renderProps.active ? 'solid 1px #999' : 'solid 1px #ccc'}
        href={props.href}
        rel={props.rel}
        target={props.target}
        title={props.title}
        download={props.download}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        children={
          <Icon
            name={props.icon}
            color={renderProps.hover || renderProps.focus || renderProps.active ? '#666' : '#999'}
          />
        }
      />
    )}
  />
)

export interface FooterOutProps {
  children: FooterOutLinkProps[]
  stub?: boolean
}

export const FooterOut: FC<FooterOutProps> = ({children, stub = false}) => (
  stub ? (
    <Box overflow="hidden">
      <Flex wrap="wrap" justify="space-between" m={-1.5}>
        {[10, 10, 10, 10, 10, 10].map((width, index) => (
          <FlexItem key={index} m={1.5}>
            <Card width={width} height={width} r={20} b={'solid 1px #ccc'} p={1.75}>
              <Stub height={5} width={5} r={10} top={0.5} left={0.5}/>
            </Card>
          </FlexItem>
        ))}
      </Flex>
    </Box>
  ) : (
    <Box overflow="hidden">
      <Flex wrap="wrap" justify="space-between" m={-1.5}>
        {children.map((item, i) => (
          <FlexItem key={i} m={1.5}>
            <FooterOutLink {...item}/>
          </FlexItem>
        ))}
      </Flex>
    </Box>
  )
)

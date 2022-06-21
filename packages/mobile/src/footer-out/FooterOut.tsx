import {
  Box,
  Card,
  CardLnk,
  Flex,
  FlexItem,
  Icon,
  IconProps,
  LinkControl,
  Stub,
} from '@qiwi/pijma-core'
import React, { FC } from 'react'

interface FooterOutLinkProps {
  href: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  icon: IconProps['name']
  stub?: boolean
  onClick?: (
    href?: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
  ) => void
  onFocus?: () => void
  onBlur?: () => void
}

const FooterOutLink: FC<FooterOutLinkProps> = (props) =>
  props.stub ? (
    <Card width={10} height={10} r={20} b="solid 1px #ccc" p={1.75}>
      <Stub height={5} width={5} r={10} top={0.5} left={0.5} />
    </Card>
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
        <CardLnk
          display="block"
          width={10}
          height={10}
          r={40}
          p={1.75}
          b={
            renderProps.hover || renderProps.focus || renderProps.active
              ? 'solid 1px #999'
              : 'solid 1px #ccc'
          }
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
              color={
                renderProps.hover || renderProps.focus || renderProps.active
                  ? '#666'
                  : '#999'
              }
            />
          }
        />
      )}
    />
  )

export interface FooterOutProps {
  children: FooterOutLinkProps[]
  stub?: number | boolean
}

export const FooterOut: FC<FooterOutProps> = ({ children, stub = false }) => (
  <Box overflow="hidden">
    <Flex wrap="wrap" justify="space-between" m={-1.5}>
      {(stub
        ? new Array(typeof stub === 'number' ? stub : 6).fill({
            href: '',
            icon: 'qiwi',
          })
        : children
      ).map((item, i) => (
        <FlexItem key={i} m={1.5}>
          <FooterOutLink stub={stub} {...item} />
        </FlexItem>
      ))}
    </Flex>
  </Box>
)

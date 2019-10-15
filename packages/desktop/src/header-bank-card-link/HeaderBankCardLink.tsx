import React, {FC} from 'react'

import {Card, LinkControl, LinkControlProps, Lnk, Image, styled, Box} from '@qiwi/pijma-core'

import {Text} from '../typography'

export interface HeaderBankCardLinkProps {
  srcImg: string
  text: string
  tabIndex?: number
  href: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['download']
  rel?: LinkControlProps['rel']
  title?: string
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

const BoxLnk = styled(Box.withComponent(Lnk))()

export const HeaderBankCardLink: FC<HeaderBankCardLinkProps> = (props) => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={(renderProps) => (
      <BoxLnk
        tabIndex={props.tabIndex}
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        target={props.target}
        download={props.download}
      >
        <Card
          mb={3}
          r={10}
          width={59}
          s={renderProps.hover || renderProps.active || renderProps.focus ? '0 15px 25px -20px rgba(0,0,0,0.75)' : '0 18px 25px -20px rgba(0,0,0,0.75)'}
        >
          <Image
            width={59}
            height={37}
            src={props.srcImg}
            stub={false}
          />
        </Card>
        <Text
          bold
          display="block"
          align="center"
          color={renderProps.hover || renderProps.active || renderProps.focus ? 'warning' : 'default'}
          transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
          children={props.text}
        />
      </BoxLnk>
    )}
  />
)

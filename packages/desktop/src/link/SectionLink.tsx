import React, {FC} from 'react'

import styled from '@emotion/styled'

import {Lnk, LinkControl, LinkControlProps, Card, Section} from '@qiwi/pijma-core'

export interface SectionLinkProps {
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
  select?: boolean
  flat?: boolean
}

const SectionLnk = styled(Card.withComponent(Lnk))().withComponent(Section)

export const SectionLink: FC<SectionLinkProps> = (props) => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <SectionLnk
        as="a"
        flat={props.flat}
        active={props.select ? props.select : renderProps.active}
        hover={renderProps.hover}
        focus={renderProps.focus}
        tabIndex={props.tabIndex}
        href={props.href}
        target={props.target}
        download={props.download}
        rel={props.rel}
        title={props.title}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        children={props.children}
      />
    )}
  />
)

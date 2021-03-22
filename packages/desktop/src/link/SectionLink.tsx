import React, {FC} from 'react'

import {styled, Lnk, LinkControl, LinkControlProps, Section, RenderChild, LnkOptions} from '@qiwi/pijma-core'

export interface SectionLinkProps {
  tabIndex?: number
  href: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['download']
  rel?: LinkControlProps['rel']
  title?: string
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
  active?: boolean
  flat?: boolean
  children: RenderChild<{
    active: boolean
    focus: boolean
    hover: boolean
  }>
}

const SectionLnk = styled(Lnk, LnkOptions)().withComponent(Section)

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
        active={props.active ? props.active : renderProps.active}
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
        children={props.children({
          active: renderProps.active,
          focus: renderProps.focus,
          hover: renderProps.hover,
        })}
      />
    )}
  />
)

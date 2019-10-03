import React, {FC} from 'react'

import {RenderChild, LinkControl, LinkControlProps, Card, Lnk, Block, styled} from '@qiwi/pijma-core'

export interface BlockLinkProps {
  tabIndex?: number
  accent?: boolean
  href?: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['download']
  rel?: LinkControlProps['rel']
  title?: string
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
  children: RenderChild<{
    active: boolean
    focus: boolean
    hover: boolean
  }>
}

const BlockLnk = styled(Card.withComponent(Lnk))().withComponent(Block)

export const BlockLink: FC<BlockLinkProps> = (props) => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={(renderProps) => (
      <BlockLnk
        accent={props.accent}
        hover={renderProps.hover}
        focus={renderProps.focus}
        active={renderProps.active}
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
        children={props.children({
          active: renderProps.active,
          focus: renderProps.focus,
          hover: renderProps.hover,
        })}
      />
    )}
  />
)

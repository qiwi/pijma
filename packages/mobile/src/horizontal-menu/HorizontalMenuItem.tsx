import {Card, LinkControl, Lnk} from '@qiwi/pijma-core'
import React from 'react'

import {Text} from '../typography'

export interface HorizontalMenuItemProps {
  active: boolean
  id: string
  href?: string
  target?: string
  reverse?: boolean
  onClick?: () => void
}

const CardLink = Card.withComponent(Lnk)

export const HorizontalMenuItem: React.FC<HorizontalMenuItemProps> = props => (
  <LinkControl
    onClick={props.onClick}
    target={props.target}
    children={renderProps => (
      <CardLink
        id={props.id}
        href={props.href}
        target={props.target}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        cursor="pointer"
        display="block"
        pb={1}
        bb={`4px solid ${
          renderProps.hover || props.active ? '#ff8c00' : 'transparent'
        }`}
        children={<Text bold size="m" children={props.children} />}
      />
    )}
  />
)

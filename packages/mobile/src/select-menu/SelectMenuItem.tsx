import {Card, LinkControl, Lnk} from '@qiwi/pijma-core'
import React from 'react'

import {Text} from '../typography'

export interface SelectMenuItemProps {
  id: string
  href?: string
  target?: string
  reverse?: boolean
  onClick?: () => void
}

const CardLink = Card.withComponent(Lnk)

export const SelectMenuItem: React.FC<SelectMenuItemProps> = props => (
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
        px={4}
        py={2}
        bg={`${renderProps.hover ? '#f5f5f5' : 'transparent'}`}
        children={<Text bold={false} size="m" children={props.children} />}
      />
    )}
  />
)

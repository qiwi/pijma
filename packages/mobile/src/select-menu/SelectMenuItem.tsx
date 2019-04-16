import {Card, LinkControl, Lnk, Typo} from '@qiwi/pijma-core'
import React from 'react'

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
        px={4}
        py={2}
        bg={`${renderProps.hover ? '#f5f5f5' : 'transparent'}`}
        children={
          <Typo
            id={`${props.id}-text`}
            weight={300}
            as="span"
            cursor="pointer"
            size={4}
            height={6}
            children={props.children}
          />
        }
      />
    )}
  />
)

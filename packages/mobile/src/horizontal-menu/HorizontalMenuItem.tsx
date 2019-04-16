import {Card, LinkControl, Lnk, Typo} from '@qiwi/pijma-core'
import React from 'react'

export interface HorizontalMenuItemProps {
  active: boolean
  id: string
  href?: string
  target?: string
  reverse?: boolean
  isLast?: boolean
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
        mr={props.isLast ? 0 : 6}
        pb={1}
        bb={`4px solid ${
          renderProps.hover || props.active ? '#ff8c00' : 'transparent'
        }`}
        children={
          <Typo
            id={`${props.id}-text`}
            as="span"
            cursor="pointer"
            size={4}
            height={6}
            weight={500}
            children={props.children}
          />
        }
      />
    )}
  />
)

import { Card } from '@qiwi/pijma-core'
import React, { FunctionComponent } from 'react'

export interface HeaderProps {
  underline?: boolean
}

export const Header: FunctionComponent<HeaderProps> = (props) => (
  <Card
    bg="#fff"
    s={props.underline ? 'inset 0px -1px 0px 0px #e6e6e6' : undefined}
    width={1}
    height={20}
    children={props.children}
  />
)

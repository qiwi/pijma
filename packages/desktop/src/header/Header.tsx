import React, {FunctionComponent} from 'react'

import {Card} from '@qiwi/pijma-core'

export interface HeaderProps {
  underline?: boolean
}

export const Header: FunctionComponent<HeaderProps> = (props) => (
  <Card
    bg="#fff"
    s={props.underline ? 'inset 0px -1px 0px 0px #d8d8d8' : undefined}
    width={1}
    height={20}
    children={props.children}
  />
)

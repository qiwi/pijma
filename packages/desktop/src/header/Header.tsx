import React, {FunctionComponent} from 'react'

import {Card} from '@qiwi/pijma-core'

export const Header: FunctionComponent = (props) => (
  <Card
    bg="#fff"
    width={1}
    height={20}
    children={props.children}
  />
)

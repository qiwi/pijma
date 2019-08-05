import React, {FC} from 'react'

import {Card} from '../primitive'

export const Section: FC = (props) => (
  <Card
    r={10}
    bg="#f5f5f5"
    children={props.children}
  />
)

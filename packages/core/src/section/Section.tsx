import React, {FC} from 'react'

import {Card} from '../primitive'

export const Section: FC<null> = (props) => (
    <Card
      r={10}
      bg="#f5f5f5"
      children={props.children}
    />
)

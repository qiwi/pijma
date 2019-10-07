import React, {FC} from 'react'

import {Card} from '../primitive'

export interface SectionProps {
  hover?: boolean
  active?: boolean
  focus?: boolean
  flat?: boolean
}

export const Section: FC<SectionProps> = ({hover, active, focus = true, ...props}) => (
  <Card
    r={props.flat ? undefined : 10}
    bg={active ? '#e6e6e6' : hover || focus ? '#f5f5f5' : undefined}
    {...props}
  />
)

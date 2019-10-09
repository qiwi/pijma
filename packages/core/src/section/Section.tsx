import React, {forwardRef, PropsWithChildren} from 'react'

import {Card} from '../primitive'

export interface SectionProps {
  hover?: boolean
  active?: boolean
  focus?: boolean
  flat?: boolean
}

export const Section = forwardRef<HTMLDivElement, PropsWithChildren<SectionProps>>(({
  hover = false,
  active = false,
  focus = true,
  flat,
  ...props
}, ref) => (
  <Card
    ref={ref}
    r={flat ? undefined : 10}
    bg={active ? '#e6e6e6' : hover || focus ? '#f5f5f5' : undefined}
    {...props}
  />
))

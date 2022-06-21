import React, { forwardRef, PropsWithChildren } from 'react'

import { Card } from '../primitive'

export interface SectionProps {
  tag?: keyof JSX.IntrinsicElements
  hover?: boolean
  active?: boolean
  focus?: boolean
  flat?: boolean
}

export const Section = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SectionProps>
>(
  (
    {
      tag = 'div',
      hover = false,
      active = false,
      focus = true,
      flat = false,
      ...props
    },
    ref,
  ) => (
    <Card
      as={tag}
      ref={ref}
      r={flat ? undefined : 10}
      bg={active ? '#e6e6e6' : hover || focus ? '#f5f5f5' : undefined}
      {...props}
    />
  ),
)

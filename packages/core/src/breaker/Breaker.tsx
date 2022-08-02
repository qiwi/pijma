import React, { FC, Fragment, ReactNode } from 'react'

const newLineRegex = /(\r\n|\r|\n)/g

export interface BreakerProps {
  children?: ReactNode
}

export const Breaker: FC<BreakerProps> = ({ children }) => (
  <Fragment>
    {typeof children === 'string'
      ? children
          .split(newLineRegex)
          .map((child, key) =>
            child.match(newLineRegex) ? <br key={key} /> : child,
          )
      : children}
  </Fragment>
)

Breaker.displayName = 'Breaker'

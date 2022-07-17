import React, { FC, Fragment } from 'react'

const newLineRegex = /(\r\n|\r|\n)/g

export const Breaker: FC = ({ children }) => (
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

import React, { Children, FC, Fragment, ReactNode } from 'react'

import { Card } from '../primitive'

export const Striper: FC = ({ children }) => {
  const elements = Children.toArray(children).filter((child) => !!child)
  if (elements.length === 0) {
    return null
  }
  return (
    <Fragment>
      {Children.map(elements, (child: ReactNode, key: number) => (
        <Card
          key={key}
          s={key === 0 ? undefined : '0 -1px 0 0 #e6e6e6'}
          children={child}
        />
      ))}
    </Fragment>
  )
}

Striper.displayName = 'Striper'

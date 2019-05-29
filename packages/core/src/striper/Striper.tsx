import React, {ReactNode, FunctionComponent, Children, Fragment} from 'react'

import {Card} from '../primitive'

export const Striper: FunctionComponent = ({children}) => {
  const elements = Children.toArray(children).filter(child => !!child)
  if (elements.length === 0) {
    return null
  }
  return (
    <Fragment>
      {Children.map(elements, (child: ReactNode, key: number) => (
        <Card
          key={key}
          children={child}
          s={key === 0 ? 'none' : '0 -1px 0 0 #e6e6e6'}
        />
      ))}
    </Fragment>
  )
}

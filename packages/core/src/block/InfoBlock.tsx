import React, {ReactNode, Children, FC} from 'react'

import {Block, Card} from '@qiwi/pijma-core'

export const InfoBlock: FC = ({children}) => {
  const elements = Children.toArray(children).filter(child => !!child)
  if (elements.length === 0) {
    return null
  }
  return (
    <Block>
      {Children.map(elements, (child: ReactNode, key: number) => (
        <Card
          key={key}
          children={child}
          bb={key === elements.length - 1 ? undefined : '1px solid #eee'}
        />
      ))}
    </Block>
  )
}

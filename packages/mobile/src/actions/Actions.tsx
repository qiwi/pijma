import { Box } from '@qiwi/pijma-core'
import React, { Children, FunctionComponent, ReactNode } from 'react'

export interface ActionsProps {
  size: 'accent' | 'normal' | 'minor'
  children?: ReactNode
}

export const Actions: FunctionComponent<ActionsProps> = (props) => {
  const elements = Children.toArray(props.children).filter((child) => !!child)
  if (elements.length === 0) {
    return null
  }
  return (
    <Box
      width={1}
      children={Children.map(elements, (child: ReactNode, key: number) => (
        <Box
          key={key}
          width={1}
          maxWidth={1}
          mt={key === 0 ? undefined : 4}
          children={child}
        />
      ))}
    />
  )
}

Actions.displayName = 'Actions'

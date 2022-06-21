import { Box, Flex } from '@qiwi/pijma-core'
import React, { Children, FunctionComponent, ReactNode } from 'react'

export interface ActionsProps {
  size: 'accent' | 'normal' | 'minor'
  vertical?: boolean
}

const margin: { [size in ActionsProps['size']]: number } = {
  accent: 6,
  normal: 5,
  minor: 4,
}

export const Actions: FunctionComponent<ActionsProps> = (props) => {
  const elements = Children.toArray(props.children).filter((child) => !!child)
  if (elements.length === 0) {
    return null
  }
  const content = Children.map(elements, (child: ReactNode, key: number) => (
    <Box
      key={key}
      width={1}
      maxWidth={1}
      mt={key === 0 || !props.vertical ? undefined : margin[props.size]}
      ml={key === 0 || props.vertical ? undefined : margin[props.size]}
      children={child}
    />
  ))
  if (props.vertical) {
    return <Box display="inline-block" maxWidth={1} children={content} />
  }
  return (
    <Flex
      display="inline-flex"
      align="center"
      maxWidth={1}
      children={content}
    />
  )
}

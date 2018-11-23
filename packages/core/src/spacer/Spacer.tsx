import React, {ReactNode, FunctionComponent, Children, Fragment} from 'react'

import {Box} from '@qiwi/pijma-core'

export interface SpacerProps {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
}

const SpacerSize: { [size in NonNullable<SpacerProps['size']>]: number } = {
  xxs: 1,
  xs: 2,
  s: 3,
  m: 4,
  l: 6,
  xl: 9,
  xxl: 12,
}

export const Spacer: FunctionComponent<SpacerProps> = ({size = 'm', children}) => {
  const elements = Children.toArray(children).filter(child => !!child)
  if (elements.length === 0) {
    return null
  }
  return (
    <Fragment>
      {Children.map(elements, (child: ReactNode, key: number) => (
        <Box
          key={key}
          mt={key === 0 ? undefined : SpacerSize[size]}
          mb={key === elements.length - 1 ? undefined : SpacerSize[size]}
          children={child}
        />
      ))}
    </Fragment>
  )
}

Spacer.defaultProps = {
  size: 'm',
}

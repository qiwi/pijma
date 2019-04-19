import React, {FunctionComponent} from 'react'

import {Typo, Stub} from '@qiwi/pijma-core'

export interface CaptionProps {
  color?: 'default' | 'support' | 'inverse'
  stub?: boolean
}

const CaptionColor: { [color in NonNullable<CaptionProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
}

export const Caption: FunctionComponent<CaptionProps> = ({color = 'support', stub, children}) => (
  stub ? (
    <Stub
      top={1}
      bottom={1}
      width={50}
      height={3}
    />
  ) : (
    <Typo
      as="h6"
      display="block"
      size={3.5}
      height={5}
      weight={500}
      color={CaptionColor[color]}
      transform="uppercase"
      spacing={1.5}
      children={children}
    />
  )
)

Caption.defaultProps = {
  color: 'support',
}

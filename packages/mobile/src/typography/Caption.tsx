import React, {FunctionComponent} from 'react'

import {Typo} from '@qiwi/pijma-core'

export interface CaptionProps {
  color?: 'default' | 'support' | 'inverse'
}

const CaptionColor: { [color in NonNullable<CaptionProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
}

const CaptionTypo = Typo.withComponent('h6')

export const Caption: FunctionComponent<CaptionProps> = ({color = 'support', children}) => (
  <CaptionTypo
    display="block"
    size={3.5}
    height={4}
    weight={500}
    color={color === undefined ? undefined : CaptionColor[color]}
    transform="uppercase"
    spacing={1.5}
    children={children}
  />
)

Caption.defaultProps = {
  color: 'support',
}

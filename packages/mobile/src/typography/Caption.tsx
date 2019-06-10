import React, {FunctionComponent} from 'react'

import {Breaker, Typo, TypoProps} from '@qiwi/pijma-core'

export interface CaptionProps {
  color?: 'default' | 'support' | 'inverse'
  align?: TypoProps['align']
}

const CaptionColor: { [color in NonNullable<CaptionProps['color']>]: string } = {
  default: '#000',
  support: '#666',
  inverse: '#fff',
}

export const Caption: FunctionComponent<CaptionProps> = ({color = 'support', align, children}) => (
  <Typo
    as="h6"
    display="block"
    size={3.5}
    height={5}
    weight={500}
    color={CaptionColor[color]}
    transform="uppercase"
    spacing={1.5}
    align={align}
    children={<Breaker children={children}/>}
  />
)

Caption.defaultProps = {
  color: 'support',
}

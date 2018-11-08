import React, {SFC} from 'react'

import {Typo} from '@qiwi/pijma-core'

export interface CaptionProps {
  color?: 'default' | 'service'
}

const CaptionTypo = Typo.withComponent('h6')

export const Caption: SFC<CaptionProps> = ({color = 'service', children}) => (
  <CaptionTypo
    display="block"
    size={3.5}
    height={4}
    weight="strong"
    color={color}
    transform="uppercase"
    spacing={1.5}
    children={children}
  />
)

Caption.defaultProps = {
  color: 'service',
}

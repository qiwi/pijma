import React, {SFC} from 'react'

import {Typo} from '@qiwi/pijma-core'

export interface ParagraphProps {
  size?: 'assist' | 'normal' | 'accent'
  color?: 'default' | 'service' | 'inverse'
}

const ParagraphTypo = Typo.withComponent('p')

export const Paragraph: SFC<ParagraphProps> = ({size = 'normal', color = 'default', children}) => (
  <ParagraphTypo
    display="block"
    size={size}
    color={color}
    children={children}
  />
)

Paragraph.defaultProps = {
  size: 'normal',
  color: 'default',
}

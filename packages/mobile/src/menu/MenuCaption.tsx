import React, {FC} from 'react'

import {Flex} from '@qiwi/pijma-core'
import {Caption} from '../typography'

interface MenuCaptionProps {
  text: string
}

export const MenuCaption: FC<MenuCaptionProps> = ({text}) => (
  <Flex px={4} height={9} align="center">
    <Caption>
      {text}
    </Caption>
  </Flex>
)

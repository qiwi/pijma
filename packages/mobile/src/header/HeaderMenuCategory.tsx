import React, {FC, Fragment} from 'react'

import {Flex} from '@qiwi/pijma-core'
import {Caption} from '../typography'

interface HeaderMenuCategoryProps {
  title: string
}

export const HeaderMenuCategory: FC<HeaderMenuCategoryProps> = ({title, children}) => (
  <Fragment>
    <Flex px={4} height={9} align="center">
      <Caption>
        {title}
      </Caption>
    </Flex>
    {children}
  </Fragment>
)

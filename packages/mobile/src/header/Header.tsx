import React, {FC} from 'react'

import {Card, Pos} from '@qiwi/pijma-core'

interface HeaderProps {
  menuCollapsed?: boolean
  zIndex?: number
}

export const Header: FC<HeaderProps> = ({zIndex = 10002, menuCollapsed = true, children}) => (
  <Pos
    as="header"
    type={menuCollapsed ? 'relative' : 'fixed'}
    top={0}
    left={0}
    width={1}
    height={15}
    zIndex={zIndex}
  >
    <Card
      bg="#fff"
      width={1}
      height={1}
      px={4}
      s={menuCollapsed ? '0 1px 2px 0 rgba(0, 0, 0, 0.12)' : undefined}
      transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      children={children}
    />
  </Pos>
)

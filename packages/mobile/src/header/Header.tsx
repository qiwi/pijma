import React, {FC} from 'react'

import {Card, Pos} from '@qiwi/pijma-core'

interface HeaderProps {
  active?: boolean
  zIndex?: number
}

export const Header: FC<HeaderProps> = ({zIndex = 10002, active, children}) => (
  <Pos
    as="header"
    type="relative"
    zIndex={zIndex}
    width={1}
    height={15}
  >
    <Pos
      type={active ? 'fixed' : 'relative'}
      top={0}
      left={0}
      width={1}
      height={15}
    >
      <Card
        bg="#fff"
        width={1}
        height={1}
        s={active ? undefined : '0 1px 2px 0 rgba(0, 0, 0, 0.12)'}
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        children={children}
      />
    </Pos>
  </Pos>
)

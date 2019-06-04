import React, {FC} from 'react'

import {Card, Pos, PosProps} from '@qiwi/pijma-core'

const HeaderComponent = Pos.withComponent('header')

interface HeaderProps extends PosProps {
  menuVisible?: boolean
  zIndex?: number
}

export const Header: FC<HeaderProps> = ({type, zIndex = 10002, menuVisible, children}) => (
  <HeaderComponent type={type} top={0} left={0} zIndex={zIndex} width={1} height={15}>
    <Card bg="#fff" width={1} height={1} s={menuVisible ? undefined : '0 1px 2px 0 rgba(0, 0, 0, 0.12)'} px={4} transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)">
      {children}
    </Card>
  </HeaderComponent>
)

import React, {FC} from 'react'
import {Card, Pos} from '@qiwi/pijma-core/primitive'

export interface TabBorderProps {
  width: number | string
  left: number | string
  borderRadius?: boolean
}

export const TabBorder: FC<TabBorderProps> = ({width, left, borderRadius}) => {
  return (
    <Pos
      transition="left 300ms cubic-bezier(0.4, 0.0, 0.2, 1), width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      type="absolute"
      height="4px"
      width={width}
      left={left}
      bottom={0}
      zIndex={1}
    >
      <Card
        bg="#ff8c00"
        r={borderRadius ? 0 : 4}
        rtl={borderRadius ? 2 : 4}
        rtr={borderRadius ? 2 : 4}
        height={1}
        width={1}
      />
    </Pos>
  )
}

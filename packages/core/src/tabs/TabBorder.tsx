import React, {FC} from 'react'
import {Card, Pos} from '../primitive'

export interface TabBorderProps {
  width: number | string
  left: number | string
  radius?: boolean
  stub?: boolean
}

export const TabBorder: FC<TabBorderProps> = ({
  width,
  left,
  radius,
  stub = false,
}) => (
  stub ? (
    null
  ) : (
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
        r={radius ? 0 : 4}
        rtl={radius ? 2 : 4}
        rtr={radius ? 2 : 4}
        height={1}
        width={1}
      />
    </Pos>
  )
)

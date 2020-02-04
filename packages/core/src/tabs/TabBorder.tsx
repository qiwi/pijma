import React, {FC} from 'react'
import {Card, Pos} from '../primitive'

export interface TabBorderProps {
  left: number,
  top: number,
  width: number,
}

export const TabBorder: FC<TabBorderProps> = ({left, top, width}) => {
  return (
    <Pos type="absolute" left={left} top={top} height="4px" width={width}>
      <Card bg="#ff8c00" r={4} height="4px" width={1}/>
    </Pos>
  )
}

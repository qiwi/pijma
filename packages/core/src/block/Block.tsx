import React, {FC} from 'react'

import {Card} from '@qiwi/pijma-core'

export interface BlockProps {
  hover?: boolean
  active?: boolean
  focus?: boolean
  tabIndex?: number
  offset?: boolean
  accent?: boolean
}

export const Block: FC<BlockProps> = (props) => {
  return (
    <Card
      r={10}
      tabIndex={props.tabIndex}
      s={props.hover || props.focus || props.active ? "0 10px 24px 0 rgba(0,0,0,0.08)" : "0 1px 2px 0 rgba(0,0,0,0.12)"}
      transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      css={props.hover && props.accent ? {transform: 'translateY(-4px)'} : undefined}
      overflow='hidden'
      children={props.children}
    />
  )
}

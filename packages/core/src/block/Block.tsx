import React, {FC} from 'react'

import {Card} from '../primitive'

export interface BlockProps {
  hover?: boolean
  active?: boolean
  focus?: boolean
  accent?: boolean
  bg?: string
}

export const Block: FC<BlockProps> = ({
  active = false,
  focus = false,
  hover = false,
  accent = false,
  bg = '#fff',
  ...props
}) => (
  <Card
    r={10}
    s={hover || focus || active ? '0 10px 24px 0 rgba(0, 0, 0, 0.08)' : '0 1px 2px 0 rgba(0, 0, 0, 0.12)'}
    transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
    transform={accent && (hover || focus || active) ? 'translateY(-4px)' : undefined}
    bg={bg}
    {...props}
  />
)

Block.defaultProps = {
  active: false,
  focus: false,
  hover: false,
  accent: false,
  bg: '#fff',
}

Block.displayName = 'Block'

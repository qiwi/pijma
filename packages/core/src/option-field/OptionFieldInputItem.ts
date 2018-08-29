import React from 'react'

import {styled, indent} from '@qiwi/pijma-core'

export interface OptionFieldInputItemProps {
  disabled?: boolean
  onClick: React.MouseEventHandler
  onMouseEnter: React.MouseEventHandler
}

const OptionFieldInputItem = styled.div<OptionFieldInputItemProps>((props) => ({
  position: 'relative',
  cursor: (
    props.disabled ? (
      'not-allowed'
    ) : (
      'pointer'
    )
  ),
  ...indent(12),
  paddingLeft: 32,
}))

export default OptionFieldInputItem

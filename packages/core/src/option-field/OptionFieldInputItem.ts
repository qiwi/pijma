import React from 'react'

import {styled, StyledComponent, Theme, indent} from '@qiwi/pijma-core'

interface OptionFieldInputItemProps {
  disabled?: boolean
  onClick: React.MouseEventHandler
  onMouseEnter: React.MouseEventHandler
}

const OptionFieldInputItem: StyledComponent<OptionFieldInputItemProps, {}, Theme> = styled('div')((props) => ({
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

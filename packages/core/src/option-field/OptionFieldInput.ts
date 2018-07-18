import React from 'react'

import {styled, StyledComponent, Theme, indent} from '@qiwi/pijma-core'

interface OptionFieldInputProps {
  tabIndex?: number
  autoFocus?: boolean
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
  onKeyDown: React.KeyboardEventHandler
  onMouseLeave: React.MouseEventHandler
}

const OptionFieldInput: StyledComponent<OptionFieldInputProps, {}, Theme> = styled('div')({
  outline: 'none',
  ...indent(12),
})

export default OptionFieldInput

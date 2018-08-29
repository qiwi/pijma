import React from 'react'

import {styled, indent} from '@qiwi/pijma-core'

interface OptionFieldInputProps {
  tabIndex?: number
  autoFocus?: boolean
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
  onKeyDown: React.KeyboardEventHandler
  onMouseLeave: React.MouseEventHandler
}

const OptionFieldInput = styled.div<OptionFieldInputProps>({
  outline: 'none',
  ...indent(12),
})

export default OptionFieldInput

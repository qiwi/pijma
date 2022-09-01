import { styled } from '@qiwi/pijma-core'
import React, { Component } from 'react'

import TrinaryCheckIcon from '../trinary-check-icon'
import CheckboxProps from './CheckboxProps'

const Wrapper = styled('div')`
  width: 24px;
  height: 24px;
`

class Checkbox extends Component<CheckboxProps> {
  onClick = () => {
    const { trinary, onChange, value } = this.props
    if (!onChange) {
      return
    }

    if (!trinary) {
      onChange(!value)
      return
    }

    if (value > 0) {
      onChange(0)
    } else {
      onChange(2)
    }
  }

  render() {
    const { value, disabled, focused } = this.props
    return (
      <Wrapper onClick={this.onClick}>
        <TrinaryCheckIcon value={value} disabled={disabled} focused={focused} />
      </Wrapper>
    )
  }
}

export { Checkbox }

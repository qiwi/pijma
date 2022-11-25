import { Path, Rect, Svg } from '@qiwi/pijma-core'
import React from 'react'

import TrinaryCheckboxProps from './TrinaryCheckboxProps'

export const TrinaryCheckIcon = ({
  focused,
  disabled,
  value,
}: TrinaryCheckboxProps) => {
  return (
    <Svg viewBox="0 0 24 24" width="24px" height="24px">
      <Rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="3"
        ry="3"
        fill="#e6e6e6"
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      />
      <Path
        d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm1 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7z"
        fill={focused && !disabled ? '#ff8c00' : 'transparent'}
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      />
      <Rect
        width="10"
        height="3"
        x="7"
        y="10.5"
        fillRule="nonzero"
        rx="1.5"
        fill={value === 1 ? (disabled ? '#ccc' : '#000') : 'transparent'}
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      />
      <Path
        d="M7.553 8.732a1.5 1.5 0 1 0-2.106 2.136l4.565 4.5a1.5 1.5 0 0 0 2.156-.051l9.957-10.8a1.5 1.5 0 1 0-2.206-2.034l-8.905 9.66-3.461-3.411z"
        fill={
          value === 2 || value === true
            ? (disabled
              ? '#ccc'
              : '#000')
            : 'transparent'
        }
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      />
    </Svg>
  )
}

export default TrinaryCheckIcon

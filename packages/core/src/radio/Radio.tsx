import React, {FunctionComponent} from 'react'

import {Svg, Path, Rect} from '../primitive'

export interface RadioProps {
  disabled?: boolean
  focused?: boolean
  checked?: boolean
}

export const Radio: FunctionComponent<RadioProps> = (props) => (
  <Svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <Rect
      width="18"
      height="18"
      x="3"
      y="3"
      rx="9"
      ry="9"
      fill="#e6e6e6"
      transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
    />
    <Path
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
      fill={props.focused && !props.disabled ? '#ff8c00' : 'transparent'}
      transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
    />
    <Rect
      width="8"
      height="8"
      x="8"
      y="8"
      rx="4"
      ry="4"
      fill={props.checked ? (props.disabled ? '#ccc' : '#000') : 'transparent'}
      transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
    />
  </Svg>
)

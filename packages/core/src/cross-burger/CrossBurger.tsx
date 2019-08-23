import React, {FC} from 'react'

import {Value, Svg, Path} from '../primitive'

export interface CrossBurgerProps {
  size?: Value
  color?: string
  active?: boolean
}

export const CrossBurger: FC<CrossBurgerProps> = ({
  size = 6,
  color = '#000',
  active = false,
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path
      d="M1,7 L23,7 C23.5522847,7 24,6.55228475 24,6 C24,5.44771525 23.5522847,5 23,5 L1,5 C0.44771525,5 0,5.44771525 0,6 C0,6.55228475 0.44771525,7 1,7 Z"
      fill={color}
      transform={`rotate(${active ? 45 : 0}deg)`}
      transformOrigin="5px 9px"
      transition="transform 0.3s ease-in-out"
    />
    <Path
      d="M1,13 L23,13 C23.5522847,13 24,12.5522847 24,12 C24,11.4477153 23.5522847,11 23,11 L1,11 C0.44771525,11 0,11.4477153 0,12 C0,12.5522847 0.44771525,13 1,13 Z"
      fill={color}
      opacity={active ? 0 : 1}
      transition="opacity 0.15s ease-in-out"
    />
    <Path
      d="M1,19 L23,19 C23.5522847,19 24,18.5522847 24,18 C24,17.4477153 23.5522847,17 23,17 L1,17 C0.44771525,17 0,17.4477153 0,18 C0,18.5522847 0.44771525,19 1,19 Z"
      fill={color}
      transform={`rotate(${active ? -45 : 0}deg)`}
      transformOrigin="5px 15px"
      transition="transform 0.3s ease-in-out"
    />
  </Svg>
)

CrossBurger.defaultProps = {
  size: 6,
  color: '#000',
  active: false,
}

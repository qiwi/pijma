import React, { FC } from 'react'

import { getDataProps } from '../getDataProps'
import { Circle, Path, Svg } from '../primitive'

export interface FilterIconProps {
  size?: number
  color?: string
  active?: boolean
}

export const FilterIcon: FC<FilterIconProps> = ({
  size = 6,
  color = '#000',
  active = false,
  ...rest
}) => (
  <Svg
    {...getDataProps(rest).data}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    focusable="false"
  >
    <Path
      d="M14 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-1.83-1a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h8.17zM8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-1.83-1a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-8.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h2.17zM15 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-1.83-1a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17z"
      fill={color}
    />
    {active ? <Circle cx="21" cy="3" r="3" fill="#ed4848" /> : null}
  </Svg>
)

FilterIcon.displayName = 'FilterIcon'

FilterIcon.defaultProps = {
  size: 6,
  color: '#000',
  active: false,
}

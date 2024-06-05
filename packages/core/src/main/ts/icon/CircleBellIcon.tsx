import React, { FC } from 'react'

import { getDataProps } from '../dataProps'
import { Circle, Path, Svg } from '../primitive'

export interface CircleBellIconProps {
  size?: number
  color?: string
}

export const CircleBellIcon: FC<CircleBellIconProps> = ({ size = 6, color = '#000', ...rest }) => (
  <Svg
    {...getDataProps(rest)}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Circle cx="12" cy="12" r="12" fill={color}/>
    <Path
      d="M14.7361 4.48278C13.9576 4.19945 13.0968 4.60083 12.8135 5.37929L12.6862 5.72908C12.6528 5.82088 12.5579 5.87435 12.461 5.86206C11.1017 5.68971 9.75556 6.47136 9.26719 7.81317L8.58314 9.69255C8.31597 10.4266 7.57608 10.8722 6.85469 11.3066C6.55604 11.4864 6.26057 11.6643 6.00311 11.8601C5.70806 12.0843 5.47185 12.3931 5.33568 12.7673C4.95789 13.8052 5.49307 14.9529 6.53102 15.3307L14.0486 18.0669C15.0865 18.4447 16.2342 17.9095 16.612 16.8715C16.7482 16.4974 16.7657 16.109 16.6839 15.7475C16.6124 15.4321 16.5005 15.1059 16.3873 14.7762C16.1139 13.9797 15.8335 13.1628 16.1007 12.4287L16.7847 10.5493C17.2731 9.20752 16.7443 7.74347 15.5923 7.00175C15.5101 6.94887 15.4718 6.84694 15.5053 6.75514L15.6326 6.40535C15.9159 5.62689 15.5145 4.76612 14.7361 4.48278Z"
      fill="white"/>
    <Path
      d="M8.2563 17.023C8.1525 16.9852 8.03666 17.0386 8.0093 17.1456C7.75776 18.1297 8.28909 19.1633 9.2637 19.518C10.2383 19.8727 11.3097 19.4225 11.7496 18.507C11.7974 18.4074 11.743 18.292 11.6392 18.2543L8.2563 17.023Z"
      fill="white"/>
  </Svg>
)

CircleBellIcon.displayName = 'CircleBellIcon'

CircleBellIcon.defaultProps = {
  size: 6,
  color: '#000',
}

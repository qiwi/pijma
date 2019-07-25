import React, {FC} from 'react'

import uuid from './uuid'

const FlagLV: FC = () => {
  const [a, b] = [uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#B9414B" offset="0%"/>
          <stop stopColor="#9D323B" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="6"/>
        <rect fill={`url(#${b})`} y="9" width="21" height="6"/>
        <rect fill={`url(#${a})`} y="6" width="21" height="3"/>
      </g>
    </svg>
  )
}

export default FlagLV

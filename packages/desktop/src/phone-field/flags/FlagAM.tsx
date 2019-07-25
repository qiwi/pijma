import React, {FC} from 'react'

import uuid from './uuid'

const FlagAM: FC = () => {
  const [a, b, c, d] = [uuid(), uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#1047B9" offset="0%"/>
          <stop stopColor="#06379D" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#F01C31" offset="0%"/>
          <stop stopColor="#D70A1F" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={d}>
          <stop stopColor="#F5B23E" offset="0%"/>
          <stop stopColor="#F0A728" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} y="5" width="21" height="5"/>
        <rect fill={`url(#${c})`} width="21" height="5"/>
        <rect fill={`url(#${d})`} y="10" width="21" height="5"/>
      </g>
    </svg>
  )
}

export default FlagAM

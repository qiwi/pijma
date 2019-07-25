import React, {FC} from 'react'

import uuid from './uuid'

const FlagTH: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#F12532" offset="0%"/>
          <stop stopColor="#EB212E" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#322B6C" offset="0%"/>
          <stop stopColor="#241F4E" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="3"/>
        <rect fill={`url(#${b})`} y="12" width="21" height="3"/>
        <rect fill={`url(#${a})`} y="3" width="21" height="9"/>
        <rect fill={`url(#${c})`} y="5" width="21" height="5"/>
      </g>
    </svg>
  )
}

export default FlagTH

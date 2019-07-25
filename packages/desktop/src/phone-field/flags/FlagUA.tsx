import React, {FC} from 'react'

import uuid from './uuid'

const FlagUA: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#156DD1" offset="0%"/>
          <stop stopColor="#0D5EB9" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#FFD948" offset="0%"/>
          <stop stopColor="#FFD430" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="8"/>
        <rect fill={`url(#${c})`} y="8" width="21" height="7"/>
      </g>
    </svg>
  )
}

export default FlagUA

import React, {FC} from 'react'

import uuid from './uuid'

const FlagLT: FC = () => {
  const [a, b, c, d] = [uuid(), uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#118357" offset="0%"/>
          <stop stopColor="#0B6A45" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#D8343D" offset="0%"/>
          <stop stopColor="#C02A32" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={d}>
          <stop stopColor="#FEC34B" offset="0%"/>
          <stop stopColor="#FCB931" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} y="5" width="21" height="5"/>
        <rect fill={`url(#${c})`} y="10" width="21" height="5"/>
        <rect fill={`url(#${d})`} width="21" height="5"/>
      </g>
    </svg>
  )
}

export default FlagLT

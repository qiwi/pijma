import React, {FC} from 'react'

import uuid from './uuid'

const FlagJP: FC = () => {
  const [a, b] = [uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#D81441" offset="0%"/>
          <stop stopColor="#BB0831" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <circle fill={`url(#${b})`} cx="10.5" cy="7.5" r="4.5"/>
      </g>
    </svg>
  )
}

export default FlagJP

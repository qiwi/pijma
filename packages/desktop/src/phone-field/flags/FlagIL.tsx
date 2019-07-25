import React, {FC} from 'react'

import uuid from './uuid'

const FlagIL: FC = () => {
  const [a, b] = [uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#0E46D4" offset="0%"/>
          <stop stopColor="#0538B9" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill={`url(#${a})`} d="M0 0h21v15H0z"/>
        <path fill={`url(#${b})`} d="M0 0h21v3H0zM0 12h21v3H0z"/>
        <path fill={`url(#${a})`} d="M0 3h21v9H0z"/>
        <path d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z" stroke="#093EC5" strokeWidth=".5"/>
        <path d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z" stroke="#093EC5" strokeWidth=".5"/>
      </g>
    </svg>
  )
}

export default FlagIL

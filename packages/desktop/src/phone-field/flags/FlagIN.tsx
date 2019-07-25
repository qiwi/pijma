import React, {FC} from 'react'

import uuid from './uuid'

const FlagIN: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#FFA44A" offset="0%"/>
          <stop stopColor="#FF9934" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#1A9F0B" offset="0%"/>
          <stop stopColor="#138806" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="5"/>
        <rect fill={`url(#${c})`} y="10" width="21" height="5"/>
        <rect fill={`url(#${a})`} y="5" width="21" height="5"/>
        <circle fillOpacity=".15" fill="#181A93" cx="10.5" cy="7.5" r="1.5"/>
        <path
          d="M10.5,9.5 C9.3954305,9.5 8.5,8.6045695 8.5,7.5 C8.5,6.3954305 9.3954305,5.5 10.5,5.5 C11.6045695,5.5 12.5,6.3954305 12.5,7.5 C12.5,8.6045695 11.6045695,9.5 10.5,9.5 Z M10.5,9 C11.3284271,9 12,8.32842712 12,7.5 C12,6.67157288 11.3284271,6 10.5,6 C9.67157288,6 9,6.67157288 9,7.5 C9,8.32842712 9.67157288,9 10.5,9 Z"
          fill="#181A93"
          fillRule="nonzero"
        />
        <circle fill="#181A93" cx="10.5" cy="7.5" r="1"/>
      </g>
    </svg>
  )
}

export default FlagIN

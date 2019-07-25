import React, {FC} from 'react'

import uuid from './uuid'

const FlagMD: FC = () => {
  const [a, b, c, d, e, f] = [uuid(), uuid(), uuid(), uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#EB1C43" offset="0%"/>
          <stop stopColor="#CA1134" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#115BCB" offset="0%"/>
          <stop stopColor="#094AAC" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={f}>
          <stop stopColor="#FFD953" offset="0%"/>
          <stop stopColor="#FFD130" offset="100%"/>
        </linearGradient>
        <rect id={e} x="7" width="7" height="15"/>
        <filter x="-10.7%" y="-5%" width="121.4%" height="110%" filterUnits="objectBoundingBox" id={d}>
          <feMorphology radius=".25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1"/>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} x="10" width="11" height="15"/>
        <rect fill={`url(#${c})`} width="7" height="15"/>
        <use fill="black" filter={`url(#${d})`} xlinkHref={`#${e}`}/>
        <use fill={`url(#${f})`} xlinkHref={`#${e}`}/>
        <path
          d="M9,6 L10,6 L10.5,4.5 L11,6 L12,6 L12,9 L10.5,10 L9,9 L9,6 Z M10,7 L10,8.5 L11,8.5 L11,7 L10,7 Z"
          fill="#AF7F59"
        />
      </g>
    </svg>
  )
}

export default FlagMD

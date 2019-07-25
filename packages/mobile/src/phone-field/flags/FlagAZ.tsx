import React, {FC} from 'react'

import uuid from './uuid'

const FlagAZ: FC = () => {
  const [a, b, c, d] = [uuid(), uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#24AAD5" offset="0%"/>
          <stop stopColor="#1899C2" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#ED1845" offset="0%"/>
          <stop stopColor="#DE0C39" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={d}>
          <stop stopColor="#21BF75" offset="0%"/>
          <stop stopColor="#19AD68" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="5"/>
        <rect fill={`url(#${c})`} y="5" width="21" height="5"/>
        <rect fill={`url(#${d})`} y="10" width="21" height="5"/>
        <path
          d="M11.3335689,6.25274924 C11.3059482,6.25092604 11.2780822,6.25 11.25,6.25 C10.5596441,6.25 10,6.80964406 10,7.5 C10,8.19035594 10.5596441,8.75 11.25,8.75 C11.2780822,8.75 11.3059482,8.74907396 11.3335689,8.74725076 C11.0951725,8.9068934 10.8084594,9 10.5,9 C9.67157288,9 9,8.32842712 9,7.5 C9,6.67157288 9.67157288,6 10.5,6 C10.8084594,6 11.0951725,6.0931066 11.3335689,6.25274924 Z M11.5,8 C11.2238576,8 11,7.77614237 11,7.5 C11,7.22385763 11.2238576,7 11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 Z"
          fill={`url(#${a})`}
        />
      </g>
    </svg>
  )
}

export default FlagAZ

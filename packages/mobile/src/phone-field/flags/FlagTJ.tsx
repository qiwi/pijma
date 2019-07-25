import React, {FC} from 'react'

import uuid from './uuid'

const FlagTJ: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#D9101C" offset="0%"/>
          <stop stopColor="#CA0814" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#0F7811" offset="0%"/>
          <stop stopColor="#0A650C" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="5"/>
        <rect fill={`url(#${c})`} y="10" width="21" height="5"/>
        <rect fill={`url(#${a})`} y="5" width="21" height="5"/>
        <path
          d="M10.0660084,8 C10.0240119,7.7825361 10,7.59044003 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 C10.7761424,7 11,7.22385763 11,7.5 C11,7.59044003 10.9759881,7.7825361 10.9339916,8 L11.504611,8 C11.7782068,8 12,8.23193359 12,8.5 C12,8.77614237 11.7842474,9 11.504611,9 L9.49538898,9 C9.2217932,9 9,8.76806641 9,8.5 C9,8.22385763 9.2157526,8 9.49538898,8 L10.0660084,8 L10.0660084,8 Z M9.5,7 C9.22385763,7 9,6.77614237 9,6.5 C9,6.22385763 9.22385763,6 9.5,6 C9.77614237,6 10,6.22385763 10,6.5 C10,6.77614237 9.77614237,7 9.5,7 Z M11.5,7 C11.2238576,7 11,6.77614237 11,6.5 C11,6.22385763 11.2238576,6 11.5,6 C11.7761424,6 12,6.22385763 12,6.5 C12,6.77614237 11.7761424,7 11.5,7 Z M13.5,8 C13.2238576,8 13,7.77614237 13,7.5 C13,7.22385763 13.2238576,7 13.5,7 C13.7761424,7 14,7.22385763 14,7.5 C14,7.77614237 13.7761424,8 13.5,8 Z M7.5,8 C7.22385763,8 7,7.77614237 7,7.5 C7,7.22385763 7.22385763,7 7.5,7 C7.77614237,7 8,7.22385763 8,7.5 C8,7.77614237 7.77614237,8 7.5,8 Z"
          fill="#FAD14E"
        />
      </g>
    </svg>
  )
}

export default FlagTJ

import React, {FC} from 'react'

import uuid from './uuid'

const FlagBY: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#E54252" offset="0%"/>
          <stop stopColor="#C63442" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#5CBE6B" offset="0%"/>
          <stop stopColor="#4EA55B" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="10"/>
        <rect fill={`url(#${c})`} y="10" width="21" height="5"/>
        <path
          d="M3,12.75 L3,15 L2.22044605e-16,15 L2.22044605e-16,0 L3,0 L3,2.25 L2.5,3 L3,3.75 L3,5.25 L2.5,6 L3,6.75 L3,8.25 L2.5,9 L3,9.75 L3,11.25 L2.5,12 L3,12.75 Z"
          fill={`url(#${a})`}
        />
        <path
          d="M-1.5 3L-.5 1.5.5 3-.5 4.5-1.5 3zM-1.5 6L-.5 4.5.5 6-.5 7.5-1.5 6zM-1.5 9L-.5 7.5.5 9-.5 10.5-1.5 9zM-1.5 12L-.5 10.5.5 12-.5 13.5-1.5 12zM.5 1.5L1.5 0 2.5 1.5 1.5 3 .5 1.5zM.5 4.5L1.5 3 2.5 4.5 1.5 6 .5 4.5zM.5 7.5L1.5 6 2.5 7.5 1.5 9 .5 7.5zM.5 10.5L1.5 9 2.5 10.5 1.5 12 .5 10.5zM.5 13.5L1.5 12 2.5 13.5 1.5 15 .5 13.5z"
          fill={`url(#${b})`}
        />
      </g>
    </svg>
  )
}

export default FlagBY

import React, {FC} from 'react'

import uuid from './uuid'

const FlagGE: FC = () => {
  const [a, b] = [uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#FF2B37" offset="0%"/>
          <stop stopColor="#FD0D1B" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <path d="M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z" fill={`url(#${b})`}/>
        <path
          d="M16.2 2.7L16 1.5 17 1.5 16.8 2.7 18 2.5 18 3.5 16.8 3.3 17 4.5 16 4.5 16.2 3.3 15 3.5 15 2.5 16.2 2.7zM4.2 2.7L4 1.5 5 1.5 4.8 2.7 6 2.5 6 3.5 4.8 3.3 5 4.5 4 4.5 4.2 3.3 3 3.5 3 2.5 4.2 2.7zM4.2 11.7L4 10.5 5 10.5 4.8 11.7 6 11.5 6 12.5 4.8 12.3 5 13.5 4 13.5 4.2 12.3 3 12.5 3 11.5 4.2 11.7zM16.2 11.7L16 10.5 17 10.5 16.8 11.7 18 11.5 18 12.5 16.8 12.3 17 13.5 16 13.5 16.2 12.3 15 12.5 15 11.5 16.2 11.7z"
          fill="#FD0D1B"
        />
      </g>
    </svg>
  )
}

export default FlagGE

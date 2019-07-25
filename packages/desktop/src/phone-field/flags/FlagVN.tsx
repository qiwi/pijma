import React, {FC} from 'react'

import uuid from './uuid'

const FlagVN: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#EA403F" offset="0%"/>
          <stop stopColor="#D82827" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#FFFE4E" offset="0%"/>
          <stop stopColor="#FFFE38" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="15"/>
        <polygon
          fill={`url(#${c})`}
          points="10.5 9.25500007 7.85496636 11.1405765 8.83089575 8.04232485 6.22024568 6.10942353 9.46843684 6.08017512 10.5 3 11.5315632 6.08017512 14.7797543 6.10942353 12.1691043 8.04232485 13.1450336 11.1405765"
        />
      </g>
    </svg>
  )
}

export default FlagVN

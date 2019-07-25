import React, {FC} from 'react'

import uuid from './uuid'

const FlagPA: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#E52448" offset="0%"/>
          <stop stopColor="#D01739" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#1367AE" offset="0%"/>
          <stop stopColor="#0A5492" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="7"/>
        <rect fill={`url(#${c})`} y="7" width="21" height="8"/>
        <path d="M0,7 L0,0 L10,0 L10,7 L0,7 Z M10,15 L10,7 L21,7 L21,15 L10,15 Z" fill={`url(#${a})`}/>
        <polygon
          fill={`url(#${c})`}
          points="5 4.31999999 3.8244295 5.11803399 4.22013366 3.75339393 3.09788697 2.88196601 4.5180161 2.83660607 5 1.5 5.4819839 2.83660607 6.90211303 2.88196601 5.77986634 3.75339393 6.1755705 5.11803399"
        />
        <polygon
          fill={`url(#${b})`}
          points="15.5 11.82 14.3244295 12.618034 14.7201337 11.2533939 13.597887 10.381966 15.0180161 10.3366061 15.5 9 15.9819839 10.3366061 17.402113 10.381966 16.2798663 11.2533939 16.6755705 12.618034"
        />
      </g>
    </svg>
  )
}

export default FlagPA

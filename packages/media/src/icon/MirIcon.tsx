import React from 'react'

const MirIcon: React.SFC = () => (
  <svg viewBox="0 0 48 24" focusable="false">
    <defs>
      <linearGradient id="mirIconGradient" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#5BAAE3"/>
        <stop offset="33%" stopColor="#58A1DC"/>
        <stop offset="87%" stopColor="#4F89C8"/>
        <stop offset="100%" stopColor="#4C82C3"/>
      </linearGradient>
    </defs>
    <path
      fill="#3CA85B"
      d="M23.49 13.27h-.31V6.91H20v10.91h2.74a2 2 0 0 0 1.76-1.16l2.38-5.2h.4v6.36h3.18V6.91h-2.83a2 2 0 0 0-1.76 1.16l-2.38 5.2z"
    />
    <path
      fill="#3BA659"
      d="M11.76 13.28h-.24l-1.41-4.93a2 2 0 0 0-1.86-1.44H5v10.91h3.18v-6.36h.31l1.93 6.36h2.43l1.93-6.36H15v6.36h3.64V6.91H15a2 2 0 0 0-1.83 1.44l-1.41 4.93z"
    />
    <path
      fill="#39A056"
      d="M31.82 11.91v5.91h3.64v-3.63H39a3.56 3.56 0 0 0 3.42-2.27l-10.6-.01z"
    />
    <path
      fill="url(#mirIconGradient)"
      d="M34 .91h-7.5a5.26 5.26 0 0 0 5.2 4.55h5.82a7.49 7.49 0 0 0 .07-.82A3.71 3.71 0 0 0 34 .91z"
      transform="translate(5 6)"
    />
  </svg>
)

export default MirIcon


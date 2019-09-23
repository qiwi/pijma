import React, {FC} from 'react'

export interface PaymentSystemIconProps {
  name: 'mastercard' | 'visa' | 'mir'
  gray?: boolean
}

interface IconProps {
  gray?: boolean
}

const MastercardIcon: FC<IconProps> = ({gray}) => (
  <svg
    width="100%"
    height="100%"
    filter={gray ? 'grayscale(1)' : 'none'}
    viewBox="0 0 48 24"
    focusable="false"
  >
    <path
      fill="#FC9F3A"
      d="M14.82 7.62c0 4.076-3.298 7.38-7.366 7.38S.088 11.696.088 7.62C.088 3.544 3.386.24 7.454.24s7.366 3.304 7.366 7.38z"
      transform="translate(21 4.76)"
    />
    <path
      fill="#F14840"
      d="M14.732 7.62c0 4.076-3.297 7.38-7.365 7.38S0 11.696 0 7.62C0 3.544 3.3.24 7.367.24c4.067 0 7.365 3.304 7.365 7.38z"
      transform="translate(12 4.76)"
    />
    <path
      fill="#F46B3E"
      d="M23.91 6.57a7.37 7.37 0 0 0-2.822 5.81 7.372 7.372 0 0 0 2.822 5.81 7.372 7.372 0 0 0 2.822-5.81 7.37 7.37 0 0 0-2.822-5.81"
    />
  </svg>
)

const MirIcon: FC<IconProps> = ({gray}) => (
  <svg
    width="100%"
    height="100%"
    filter={gray ? 'grayscale(1)' : 'none'}
    viewBox="0 0 48 24"
    focusable="false"
  >
    <defs>
      <linearGradient id="mir-icon-gradient" x1="0%" x2="100%" y1="50%" y2="50%">
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
      fill="url(#mir-icon-gradient)"
      d="M34 .91h-7.5a5.26 5.26 0 0 0 5.2 4.55h5.82a7.49 7.49 0 0 0 .07-.82A3.71 3.71 0 0 0 34 .91z"
      transform="translate(5 6)"
    />
  </svg>
)

const VisaIcon: FC<IconProps> = ({gray}) => (
  <svg
    width="100%"
    height="100%"
    filter={gray ? 'grayscale(1)' : 'none'}
    viewBox="0 0 48 24"
    focusable="false"
  >
    <defs>
      <linearGradient id="visa-icon-gradient" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#363C61"/>
        <stop offset="100%" stopColor="#4D64A9"/>
      </linearGradient>
    </defs>
    <path
      fill="url(#visa-icon-gradient)"
      d="M13 .91L8.52 11.82H5.6L3.4 3.27a1.21 1.21 0 0 0-.65-1 11.44 11.44 0 0 0-2.72-1l.06-.4h4.69a1.36 1.36 0 0 1 1.27 1.16l1.16 6.13L10.08.87 13 .91zm11.4 7.33c0-2.81-3.89-3-3.86-4.22 0-.38.37-.79 1.17-.89a5.2 5.2 0 0 1 2.72.48l.48-2.26a7.41 7.41 0 0 0-2.58-.47c-2.72 0-4.64 1.45-4.66 3.52 0 1.53 1.37 2.39 2.41 2.9 1.04.51 1.43.86 1.43 1.32 0 .72-.86 1-1.65 1A5.77 5.77 0 0 1 17 9l-.5 2.34a8.35 8.35 0 0 0 3.07.57c2.9 0 4.79-1.43 4.8-3.65l.03-.02zm7.17 3.6h2.55L31.92.91h-2.35a1.38 1.38 0 0 0-1.17.91l-4.14 10h2.89l.58-1.82h3.54l.3 1.84zm-3.05-4.11l1.45-4 .84 4h-2.29zM16.92.91l-2.28 10.91h-2.76L14.17.91h2.75z"
      transform="translate(7 6)"
    />
  </svg>
)

export const PaymentSystemIcon: FC<PaymentSystemIconProps> = ({name, gray = false}) => {
  switch (name) {
    case 'mastercard':
      return <MastercardIcon gray={gray}/>
    case 'mir':
      return <MirIcon gray={gray}/>
    default:
      return <VisaIcon gray={gray}/>
  }
}

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
    viewBox="0 0 48 24"
    focusable="false"
  >
    <path
      fill={gray ? '#999' : '#F46B3E'}
      fillRule="evenodd"
      d="M20 4h8v16h-8z"
    />
    <path
      fill={gray ? '#666' : '#F14840'}
      fillRule="evenodd"
      d="M20.22 12c0-3.07 1.4-5.97 3.78-7.86a9.81 9.81 0 0 0-13.38 1.08 10.08 10.08 0 0 0 0 13.56A9.81 9.81 0 0 0 24 19.86 10.02 10.02 0 0 1 20.22 12z"
    />
    <path
      fill={gray ? '#ccc' : '#FC9F3A'}
      fillRule="evenodd"
      d="M40 12a10 10 0 0 1-5.57 9A9.8 9.8 0 0 1 24 19.85a10.04 10.04 0 0 0 0-15.72A9.8 9.8 0 0 1 34.43 3 10 10 0 0 1 40 12z"
    />
  </svg>
)

const MirIcon: FC<IconProps> = ({gray}) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 48 24"
    focusable="false"
  >
    <path
      fill={gray ? '#999' : '#4DB45E'}
      fillRule="evenodd"
      d="M12.93 5s-1.87 0-2.37 1.84l-1.78 6.47h-.35S7.1 8.55 6.65 6.83C6.15 5 4.27 5 4.27 5H0v14h4.27v-8.31h.36L7.12 19h2.97l2.49-8.3h.35V19h4.28V5h-4.28zM28.54 5s-1.25.12-1.84 1.47l-3.03 6.84h-.35V5h-4.27v14h4.03s1.31-.12 1.9-1.47l2.97-6.84h.35V19h4.27V5h-4.03zM34.47 11.36V19h4.27v-4.46h4.63a4.63 4.63 0 0 0 4.36-3.18H34.47z"
    />
    <path
      fill={gray ? '#999' : '#00A9E4'}
      fillRule="evenodd"
      d="M43.37 5h-9.5a6.95 6.95 0 0 0 4.93 5.5c.57.16 1.17.25 1.78.25h7.33c.06-.32.09-.65.09-.98A4.7 4.7 0 0 0 43.37 5z"
    />
  </svg>
)

const VisaIcon: FC<IconProps> = ({gray}) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 48 24"
    focusable="false"
  >
    <path
      fill={gray ? '#999' : '#1A1F71'}
      fillRule="evenodd"
      transform="translate(0 4)"
      d="M24.47 4.93c.02-2.82 2.68-4.78 6.46-4.78 1.47 0 2.66.31 3.58.64l-.68 3.07a7.36 7.36 0 0 0-3.77-.65c-1.1.14-1.6.7-1.62 1.21-.03 1.7 5.38 1.92 5.36 5.74-.01 3-2.64 4.95-6.66 4.95a11.8 11.8 0 0 1-4.25-.77l.7-3.17c.88.4 2 .94 3.92.91 1.1-.01 2.28-.44 2.29-1.41 0-.64-.5-1.1-1.98-1.8-1.45-.7-3.38-1.86-3.35-3.94zM40.97.41h3.26l3.08 14.47h-3.53l-.46-2.16h-4.9l-.8 2.16H33.6l5.74-13.4C39.6.82 40.24.4 40.97.4zm.56 3.91L39.5 9.76h3.17l-1.15-5.44zM19.6.42h3.83l-3.16 14.46h-3.83L19.6.41zm-5.65 0h4.01l-6.19 14.46H7.73L4.68 3.33c-.19-.7-.35-.97-.9-1.27C2.84 1.57 1.33 1.12 0 .83L.09.41h6.5c.83 0 1.58.54 1.77 1.48l1.6 8.37L13.96.41z"
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

import React, {FC} from 'react'

export interface PaymentSecurityIconProps {
  name: 'mastercardId' | 'mastercardSC' | 'visa' | 'pci' | 'mir'
  gray?: boolean
}

interface IconProps {
  gray?: boolean
}

const MastercardIdIcon: FC<IconProps> = ({gray}) => (
  <svg width="100%" height="100%" viewBox="0 0 64 24" focusable="false">
    <path
      fill={gray ? '#999' : '#000'}
      fillRule="nonzero"
      d="M22.45 19.9h-.48v-5.44h.48zm3.62-5.44c.41-.01.83.05 1.22.19a2.39 2.39 0 0 1 1.51 1.4 3.2 3.2 0 0 1 0 2.26 2.39 2.39 0 0 1-1.51 1.4c-.4.14-.81.2-1.23.2h-1.98v-5.46zm-1.52.45v4.55h1.52c.35 0 .7-.05 1.05-.16.28-.1.54-.25.76-.46.21-.2.37-.44.47-.71.21-.61.21-1.27 0-1.87a1.92 1.92 0 0 0-1.23-1.18c-.34-.1-.7-.16-1.05-.15zm10.3-.52a2.92 2.92 0 0 1 1.29.3 2.45 2.45 0 0 1 .91.83l-.4.26a1.92 1.92 0 0 0-.75-.68 2.19 2.19 0 0 0-1.05-.25c-.31 0-.62.06-.9.17a2.16 2.16 0 0 0-1.22 1.2 2.63 2.63 0 0 0 0 1.9 2.16 2.16 0 0 0 1.21 1.2 2.41 2.41 0 0 0 1.95-.07 2.09 2.09 0 0 0 .76-.68l.4.29a2.32 2.32 0 0 1-.93.8c-.19.1-.4.18-.6.23-.6.13-1.21.09-1.78-.13a2.67 2.67 0 0 1-1.47-1.46 3.1 3.1 0 0 1 0-2.25 2.63 2.63 0 0 1 1.47-1.45c.35-.14.73-.21 1.1-.2zm3.82 2.5a1.4 1.4 0 0 1 .92-.66 1.83 1.83 0 0 1 1 .06 1.29 1.29 0 0 1 .8.76c.07.2.11.41.1.62v2.25h-.44V17.8c0-.17-.02-.34-.07-.5a1 1 0 0 0-.6-.61 1.41 1.41 0 0 0-.98 0 1.15 1.15 0 0 0-.65.64c-.07.15-.1.32-.1.49v2.09h-.44v-5.6h.44zm5.74-.7a1.66 1.66 0 0 1 1.22.53c.15.17.28.37.36.59.09.24.13.5.13.75v.18h-3.08c.01.2.06.4.15.57a1.34 1.34 0 0 0 1.27.78c.24 0 .47-.05.69-.14.2-.1.39-.23.55-.38l.24.3a2.18 2.18 0 0 1-.73.49c-.12.04-.25.08-.38.1l-.4.02c-.25 0-.5-.04-.73-.14a1.71 1.71 0 0 1-.97-.99c-.1-.25-.14-.51-.14-.78 0-.26.04-.52.14-.76a1.72 1.72 0 0 1 1.68-1.13zm0 .4a1.28 1.28 0 0 0-1.2.76 1.6 1.6 0 0 0-.15.51h2.61a1.59 1.59 0 0 0-.13-.52 1.22 1.22 0 0 0-1.14-.76zm4.43-.4c.26 0 .52.05.76.15.22.1.43.24.6.42l-.3.3a1.45 1.45 0 0 0-1.07-.45 1.4 1.4 0 0 0-1.01.42c-.13.14-.23.3-.3.47-.14.38-.14.8 0 1.18a1.36 1.36 0 0 0 1.3.89c.22 0 .42-.04.6-.13.19-.08.35-.19.5-.33l.27.3c-.16.19-.37.33-.6.43-.23.1-.5.15-.75.14-.26 0-.52-.04-.76-.14-.45-.18-.8-.54-.98-1a2.1 2.1 0 0 1 0-1.5c.18-.45.53-.8.98-1 .24-.1.5-.15.75-.15zm2.84 1.6h.6l1.54-1.54h.56l-1.74 1.73 1.77 1.93h-.56l-1.57-1.7h-.6v1.7h-.45v-5.6h.44zm-23.9-5.27v-2.34c0-.88-.56-1.47-1.47-1.48a1.44 1.44 0 0 0-1.3.66 1.37 1.37 0 0 0-1.24-.66c-.44-.02-.85.2-1.09.56v-.47h-.81v3.73h.82v-2.07c0-.64.36-.99.91-.99s.81.35.81.99v2.07h.82v-2.07c0-.64.37-.99.91-.99s.82.35.82.99v2.07zM39.9 8.79h-1.33V7.66h-.8V8.8H37v.74h.76v1.7c0 .87.34 1.38 1.3 1.38.35 0 .7-.1 1-.28l-.22-.7c-.22.13-.47.2-.72.21-.4 0-.54-.25-.54-.62V9.53h1.32zm6.92-.1c-.4 0-.78.2-.99.55V8.8h-.8v3.73h.81v-2.09c0-.62.27-.96.8-.96.17 0 .34.03.5.1l.25-.77c-.18-.07-.38-.1-.57-.1zm-10.46.4c-.46-.27-.99-.4-1.52-.39-.94 0-1.56.45-1.56 1.2 0 .6.45.98 1.29 1.1l.38.05c.44.06.65.18.65.39 0 .28-.3.45-.85.45-.44.01-.88-.13-1.24-.4l-.38.64c.47.33 1.04.5 1.61.48 1.08 0 1.7-.5 1.7-1.21 0-.66-.49-1-1.3-1.12l-.38-.05c-.35-.05-.63-.12-.63-.37 0-.27.26-.43.7-.43.42 0 .82.11 1.17.31zm21.73-.39c-.4-.01-.78.2-.98.55v-.46h-.8v3.73h.8v-2.09c0-.62.27-.96.8-.96.17 0 .35.03.5.1l.26-.77c-.19-.07-.38-.1-.58-.1zm-10.45 1.96c0 1.13.79 1.95 1.99 1.95.48.03.96-.13 1.34-.44l-.4-.66c-.28.22-.62.33-.97.33-.65 0-1.13-.47-1.13-1.19s.48-1.18 1.13-1.2c.35.01.69.13.97.34l.39-.65a1.95 1.95 0 0 0-1.34-.45c-1.2 0-1.99.83-1.99 1.96zm7.6 0V8.79h-.82v.45a1.41 1.41 0 0 0-1.17-.54c-1.05 0-1.87.81-1.87 1.95s.82 1.96 1.87 1.96c.45.02.9-.18 1.17-.55v.45h.81zm-3.02 0c0-.66.42-1.2 1.13-1.2.67 0 1.12.52 1.12 1.2 0 .67-.45 1.19-1.12 1.19-.7 0-1.13-.54-1.13-1.2zM42.43 8.7c-1.09 0-1.85.8-1.85 1.96 0 1.18.8 1.95 1.9 1.95.56.02 1.1-.16 1.54-.52l-.4-.6c-.31.25-.7.38-1.09.39-.52 0-1-.24-1.12-.91h2.77l.02-.32c0-1.16-.73-1.95-1.77-1.95zm-.01.72c.52 0 .86.33.94.9h-1.94c.09-.53.41-.9.99-.9zm20.35 1.24V7.3h-.81v1.94a1.41 1.41 0 0 0-1.18-.54c-1.05 0-1.87.82-1.87 1.96s.82 1.95 1.87 1.95c.46.02.9-.18 1.18-.54v.45h.8zm.95 1.52a.24.24 0 0 1 .22.32.24.24 0 0 1-.22.15.24.24 0 0 1-.23-.15.24.24 0 0 1 .22-.33zm0 .42a.18.18 0 0 0 .12-.06.19.19 0 0 0-.05-.3.18.18 0 0 0-.07-.01l-.08.01a.19.19 0 0 0-.06.3l.06.04.07.02zm0-.3a.1.1 0 0 1 .07.02c.02.01.03.03.03.05 0 .02 0 .03-.02.05a.09.09 0 0 1-.05.02l.07.08h-.06l-.06-.08h-.03v.08h-.04v-.22zm-.05.04v.06h.09l.01-.02-.01-.02h-.03zm-3.92-1.69c0-.65.43-1.19 1.13-1.19.67 0 1.12.52 1.12 1.2s-.45 1.19-1.12 1.19c-.7 0-1.13-.54-1.13-1.2zm-27.4 0V8.8h-.82v.45a1.41 1.41 0 0 0-1.17-.55c-1.05 0-1.87.82-1.87 1.96s.82 1.96 1.87 1.96c.45.02.9-.19 1.17-.55v.45h.81zm-3.01 0c0-.65.43-1.19 1.13-1.19.67 0 1.12.52 1.12 1.2s-.45 1.19-1.12 1.19c-.71 0-1.14-.54-1.14-1.2zm25.63 9.07h-.07v.19h-.03v-.19h-.07v-.03h.17zm.27.19h-.04v-.18l-.06.16h-.04l-.06-.16v.18H55v-.22h.06l.06.15.06-.15h.05z"
    />
    <path
      fill={gray ? '#999' : '#F46B3E'}
      fillRule="evenodd"
      d="M6.61 6.22h4.9v8.82h-4.9z"
    />
    <path
      fill={gray ? '#666' : '#F14840'}
      fillRule="evenodd"
      d="M6.93 10.63a5.6 5.6 0 0 1 2.14-4.4 5.6 5.6 0 1 0 0 8.81 5.6 5.6 0 0 1-2.14-4.4z"
    />
    <path
      fill="#6a6a6a"
      fillRule="nonzero"
      d="M17.72 14.88v-.82h.16v-.17h-.4v.17h.16v.82zm.77 0v-1h-.12l-.14.72-.14-.71h-.12v.99h.08v-.74l.13.64h.1l.12-.64v.75z"
    />
    <path
      fill={gray ? '#ccc' : '#FC9F3A'}
      fillRule="evenodd"
      d="M18.14 10.63a5.6 5.6 0 0 1-9.07 4.4 5.6 5.6 0 0 0 0-8.8 5.6 5.6 0 0 1 9.07 4.4z"
    />
  </svg>
)

const MastercardSCIcon: FC<IconProps> = ({gray}) => (
  <svg width="100%" height="100%" viewBox="0 0 64 24" focusable="false">
    <path
      fill={gray ? '#999' : '#000'}
      d="M60.2 6a1.6 1.6 0 0 0-.9 1 2 2 0 0 0 .3 1.9 1.6 1.6 0 0 0 1.3.5l.7-.1a1.6 1.6 0 0 0 .9-1v-.7V7l-.4-.6a1.6 1.6 0 0 0-1.2-.5c-.3 0-.5 0-.7.2zm1.6-1.1l.7.6V2h1.2v8.4h-1.2v-.6l-.7.6-1 .2A2.8 2.8 0 0 1 58 8.8L58 7.6l.2-1.2A2.8 2.8 0 0 1 59.6 5a2.8 2.8 0 0 1 2.2 0zm-4.6-.2l.5.1-.3 1.3-.5-.2h-1l-.4.3-.3.5-.1.7v3h-1.2V4.8H55v.7c.2-.3.4-.5.7-.6.3-.2.6-.2 1-.2h.4zM48.5 6a1.6 1.6 0 0 0-.9 1 2 2 0 0 0 .4 1.9 1.6 1.6 0 0 0 1.2.5l.7-.1a1.6 1.6 0 0 0 .9-1l.1-.7-.1-.7-.3-.6a1.6 1.6 0 0 0-1.3-.5c-.2 0-.5 0-.7.2zm3.6 4.4h-1.3v-.6l-.7.6-1 .2a2.8 2.8 0 0 1-2.6-1.8c-.2-.3-.2-.7-.2-1.2 0-.4 0-.8.2-1.2A2.8 2.8 0 0 1 48 5a2.8 2.8 0 0 1 2.1 0l.7.6v-.7h1.3v5.6zM44.6 5l1 .7-.8.8L44 6a1.7 1.7 0 0 0-1.9.3L42 7l-.2.7c0 .3 0 .5.2.8 0 .2.2.4.3.5l.5.4.7.1.8-.1.6-.5.7.9c-.2.3-.5.5-.9.7a3 3 0 0 1-1.2.2c-.4 0-.8 0-1.2-.2a2.8 2.8 0 0 1-1.5-1.6l-.2-1.2c0-.4 0-.8.2-1.1a2.8 2.8 0 0 1 1.5-1.6l1.2-.2c.5 0 .9 0 1.2.2zm-4.8-.2l.4.1-.3 1.3-.5-.2h-1l-.4.3-.3.5v3.7h-1.3V4.8h1.2v.7c.2-.3.4-.5.7-.6.3-.2.6-.2 1-.2h.5zm-8 1.2c-.2 0-.4.1-.5.3l-.3.4-.2.6h3c-.1-.5-.3-.8-.5-1-.3-.3-.6-.4-1-.4h-.6zm1.6-1c.4.1.6.3.9.6l.5 1A3.5 3.5 0 0 1 35 8h-4.2l.2.6a1.5 1.5 0 0 0 1 .7l.5.1.8-.1.8-.5.6.9a3 3 0 0 1-1 .6l-1.3.2c-.4 0-.8 0-1.1-.2a2.6 2.6 0 0 1-1.5-1.6c-.2-.3-.2-.7-.2-1.2 0-.4 0-.8.2-1.2 0-.3.3-.6.5-.9.3-.3.6-.5 1-.6a3 3 0 0 1 2.1 0zm-4.8 1h-2.2v2.5l.1.5.2.3.3.2H27.9l.6-.3.4 1-.7.3-1 .2a2 2 0 0 1-1.5-.5c-.3-.4-.5-1-.5-1.7V6h-1.1V5h1.1V3h1.2v1.7h2.2V6zm-5.8.3A3.3 3.3 0 0 0 22 6a4.4 4.4 0 0 0-1-.1l-.8.1-.2.5v.3l.2.1.3.1.4.1h.6l1.4.6c.4.3.5.7.5 1.1a1.6 1.6 0 0 1-.6 1.4c-.3.1-.5.3-.8.3a4 4 0 0 1-1.6.2 4.2 4.2 0 0 1-2-.7l.6-1a3 3 0 0 0 .8.4 3 3 0 0 0 1 .2c.5 0 .8 0 1-.2.3 0 .4-.3.4-.5l-.3-.4-.7-.2h-.6c-.6-.2-1.1-.3-1.4-.6-.3-.3-.5-.7-.5-1.1 0-.3 0-.5.2-.8 0-.2.2-.4.4-.5l.7-.4 1-.1 1.3.1 1 .5-.5 1zM13.6 6a1.6 1.6 0 0 0-.9 1 2 2 0 0 0 0 1.3c0 .3.2.4.4.6a1.6 1.6 0 0 0 1.2.5l.7-.1a1.6 1.6 0 0 0 .9-1v-.7V7l-.4-.6a1.6 1.6 0 0 0-1.2-.5c-.3 0-.5 0-.7.2zm3.5 4.4H16v-.6l-.7.6-1 .2a2.8 2.8 0 0 1-2.6-1.8c-.2-.3-.3-.7-.3-1.2l.3-1.2A2.8 2.8 0 0 1 13 5a2.8 2.8 0 0 1 2.2 0l.7.6v-.7h1.2v5.6zm-7 0H8.9V3.7l-2.4 6H5l-2.4-6v6.7H1.3V2.2h2l2.4 5.9 2.4-5.9h2v8.2zm50.4 6.8l-.4.3-.3.4-.1.5h2.8c0-.4-.2-.7-.5-1-.2-.2-.5-.3-.9-.3l-.6.1zm1.7-1l.8.6.5 1a3.4 3.4 0 0 1 .2 1.5h-4c0 .3 0 .5.2.7a1.5 1.5 0 0 0 .8.6l.6.1.8-.1.7-.5.6.9a3 3 0 0 1-1 .6 4 4 0 0 1-1.2.1 3 3 0 0 1-1.1-.2 2.5 2.5 0 0 1-1.5-1.4l-.2-1.2.2-1.2.6-.9.8-.5a2.8 2.8 0 0 1 2.2 0zm-8.4 1.1a1.5 1.5 0 0 0-.9 1 2 2 0 0 0 .4 1.8 1.5 1.5 0 0 0 1.2.5l.6-.1a1.5 1.5 0 0 0 .9-1V19v-.7l-.4-.5a1.6 1.6 0 0 0-1.1-.5l-.7.1zm1.5-1l.7.5v-3.3h1.2v8.1H56V21l-.7.5c-.3.2-.6.2-1 .2a2.6 2.6 0 0 1-2.5-1.7 3 3 0 0 1-.2-1.1c0-.4 0-.8.2-1.1a2.7 2.7 0 0 1 1.4-1.5 2.6 2.6 0 0 1 2.1 0zm-8.1 1a1.6 1.6 0 0 0-1 .9v1.4l.4.6.6.3.6.1h.7a1.6 1.6 0 0 0 1-1v-.7-.7a1.6 1.6 0 0 0-1.7-1h-.6zm1.8-1a2.8 2.8 0 0 1 1.5 1.5c.2.3.3.7.3 1.1a2.9 2.9 0 0 1-.9 2c-.2.3-.5.5-.9.6a3 3 0 0 1-1.2.2 3 3 0 0 1-1.1-.2A2.8 2.8 0 0 1 45 20L45 19a2.9 2.9 0 0 1 .9-2c.2-.3.5-.5.9-.6a3 3 0 0 1 1.1-.2c.5 0 .8 0 1.2.2zm-7.1-2.6a4 4 0 0 1 1.7.8l.5.7-1 .7a2.6 2.6 0 0 0-2.2-1.1 3 3 0 0 0-1.2.2 2.6 2.6 0 0 0-1.4 1.5c-.2.3-.2.7-.2 1.1 0 .5 0 .9.2 1.2.1.4.3.7.6 1l.8.5a3 3 0 0 0 2.4 0l1-1 1 .9a3.4 3.4 0 0 1-1.3 1.1 4 4 0 0 1-2 .5c-.5 0-1.1-.2-1.6-.4a3.9 3.9 0 0 1-2.5-3.8L37 16a3.9 3.9 0 0 1 2.2-2.1 4.4 4.4 0 0 1 2.7-.2zm-9.3 3.5l-.4.3-.3.4-.2.5h2.9l-.5-1c-.2-.2-.5-.3-1-.3l-.5.1zm1.6-1l.8.6c.3.3.4.6.6 1a3.4 3.4 0 0 1 .1 1.5h-4l.2.7a1.5 1.5 0 0 0 .9.6l.5.1.9-.1.7-.5.6.9a3 3 0 0 1-1 .6 4 4 0 0 1-1.2.1 3 3 0 0 1-1.1-.2 2.5 2.5 0 0 1-1.5-1.4l-.2-1.2c0-.4 0-.8.2-1.2l.6-.9.8-.5a2.8 2.8 0 0 1 2.1 0zm-4.5-.1l.4.1-.2 1.2-.5-.2h-1l-.4.4-.2.4-.1.6v3h-1.2v-5.4h1.2v.6c.1-.3.4-.4.6-.6l1-.1h.4zM25 19.3c0 .4 0 .8-.2 1.1a2.1 2.1 0 0 1-1.4 1.2 3.2 3.2 0 0 1-1.8 0c-.3 0-.6-.2-.8-.4-.3-.2-.4-.5-.6-.8l-.2-1v-3.2h1.2v3.7l.4.4.4.3a1.7 1.7 0 0 0 1 0 1 1 0 0 0 .7-.7l.1-.7v-3H25v3.1zm-7-3c.4.1.7.3 1 .6l-.8.8-.6-.4-.7-.1a1.6 1.6 0 0 0-1.1.4l-.4.6v1.4l.4.6a1.5 1.5 0 0 0 1.1.4l.7-.1.6-.4.8.8c-.3.3-.6.5-1 .6-.3.2-.7.2-1 .2a3 3 0 0 1-1.2-.2 2.7 2.7 0 0 1-1.5-1.5A3 3 0 0 1 14 19c0-.4 0-.8.2-1.1a2.6 2.6 0 0 1 1.5-1.5 3 3 0 0 1 1.1-.2c.4 0 .8 0 1.2.2zm-7.9.9c-.2 0-.3.2-.4.3l-.3.4-.2.5H12c0-.4-.2-.7-.4-1-.3-.2-.6-.3-1-.3l-.5.1zm1.6-1l.8.6c.3.3.4.6.6 1a3.4 3.4 0 0 1 .1 1.5h-4l.2.7a1.5 1.5 0 0 0 .9.6l.5.1.8-.1.8-.5.6.9a3 3 0 0 1-1 .6 4 4 0 0 1-1.2.1 3 3 0 0 1-1.2-.2 2.5 2.5 0 0 1-1.4-1.4l-.2-1.2c0-.4 0-.8.2-1.2l.5-.9.9-.5a2.8 2.8 0 0 1 2.1 0zm-5.3-.8l-1-.5a3.8 3.8 0 0 0-2 0c-.2 0-.4 0-.5.2-.2 0-.3.2-.4.4a1 1 0 0 0 0 .9l.3.3.5.2.7.1h.6l.9.3c.3 0 .6.2.8.4l.6.6.2 1A2.2 2.2 0 0 1 6 21l-1 .5a4.4 4.4 0 0 1-2 0 5.8 5.8 0 0 1-1.7-.5c-.2 0-.4-.2-.6-.4l.7-1 .4.3a4.2 4.2 0 0 0 2 .5h.8c.2 0 .4-.2.5-.3.2 0 .3-.2.4-.3l.2-.5c0-.3-.2-.6-.5-.7a4 4 0 0 0-1.3-.4h-.6l-.9-.3c-.3 0-.5-.2-.7-.4A2 2 0 0 1 1 17a2 2 0 0 1-.2-1 2.2 2.2 0 0 1 1-1.8 3 3 0 0 1 1-.5l1.2-.1a5 5 0 0 1 2.8.8l-.6 1z"
    />
  </svg>
)

const VisaVerifiedIcon: FC<IconProps> = ({gray}) => (
  <svg width="100%" height="100%" viewBox="0 0 64 24" focusable="false">
    <path
      fill={gray ? '#999' : '#1a1f71'}
      fillRule="evenodd"
      d="M31.73 12.53c.83 0 1.5.16 1.96.32l.15.06-.32 1.97-.21-.1a4.05 4.05 0 0 0-1.76-.35c-.92 0-1.35.4-1.35.78 0 .43.5.71 1.33 1.13 1.35.65 1.98 1.44 1.97 2.47-.01 1.9-1.62 3.12-4.1 3.12a7.4 7.4 0 0 1-2.46-.43l-.15-.06.33-2.04.3.15a4.7 4.7 0 0 0 2.21.47c.69 0 1.4-.27 1.4-.88.02-.4-.3-.7-1.2-1.14-.9-.43-2.08-1.16-2.07-2.47.02-1.77 1.65-3 3.97-3zm8.15.17l1.9 9.1H39.6l-.3-1.37h-3c-.1.22-.45 1.22-.5 1.35v.02h-2.47l3.5-8.35c.22-.55.6-.73 1.1-.75h.13zm-13.1-.02L25.3 21.8h-2.34l1.46-9.1zm-10.23 0c.5.03.92.2 1.06.77l.83 4.18.24 1.27 2.3-6.2h2.5l-3.7 9.08h-2.5l-1.9-7.22a5.48 5.48 0 0 1 2.96 2.82l.05.12c-.87-2.23-2.42-3.8-5.67-4.62l.04-.2zm21.84 3.25l-.17-.78c-.11.34-.33.9-.31.87l-.9 2.46-.04.08h1.96c-.1-.43-.5-2.42-.54-2.61v-.02l-.17-.78zm7-9.72l.52 3.02 1.42-2.95h1.03l-2.28 4.47c-.55 1.04-1.08 1.37-1.9 1.37-.19 0-.29-.02-.38-.05v-.87c.13.04.28.06.48.06.3 0 .57-.14.75-.44l.14-.29-.89-4.18zm-7.24-4.07l-1.3 8.38h-1.2v-.78a2.6 2.6 0 0 1-1.84.9c-1.17 0-1.98-.88-1.69-2.77.33-2.08 1.62-3.01 2.92-3.01.53 0 .95.1 1.26.2l.42-2.7zM11.35 4.8c1.68 0 2.24 1.26 2 2.85l-.07.34H9.69c-.1 1.1.4 1.56 1.27 1.56.72 0 1.35-.26 2.03-.7v1.1c-.67.42-1.44.68-2.35.68-1.57 0-2.6-.89-2.29-2.9.28-1.83 1.54-2.93 3-2.93zm18.26 0c1.68 0 2.23 1.26 2 2.85l-.07.34h-3.6c-.1 1.1.4 1.56 1.26 1.56.72 0 1.36-.26 2.04-.7v1.1c-.67.42-1.44.68-2.35.68-1.57 0-2.6-.89-2.29-2.9.28-1.83 1.54-2.93 3-2.93zm11.8-.63l-.39 2.58c.32-.28.75-.56 1.3-.56.89 0 1.48.66 1.27 2.09-.24 1.56-1.21 2.3-2.48 2.3-.65 0-1.18-.11-1.69-.3l.91-5.94zM3.87 2.44l1.2 6.13L8.09 2.5h1.59l-5.75 8.04L2.2 2.71zM17.77 4.8l.02 1.38a3.1 3.1 0 0 0-2.16 1.13l-.5 3.2h-1.38l.85-5.6h1.2v1.13c.46-.65 1.1-1.2 1.97-1.24zm2.25.11l-.87 5.6h-1.39l.87-5.6zm3.85-2.66c.24 0 .43.02.56.05l.01 1.13a3.63 3.63 0 0 0-.57-.05c-.48 0-.77.22-.84.71l-.13.82h1.08v1.14h-1.25l-.69 4.47h-1.37l.68-4.47h-.8l.17-1.14h.8l.16-.95c.19-1.25 1.05-1.71 2.2-1.71zm2.28 2.66l-.87 5.6h-1.4l.87-5.6zm15.75 2.2c-.36 0-.71.24-1.03.56l-.29 1.92c.2.09.36.12.65.12.67 0 1.13-.4 1.29-1.37.12-.82-.16-1.22-.62-1.22zm-6.82-1.14c-.74 0-1.37.6-1.56 1.82-.16 1.1.23 1.6.84 1.6.51 0 .96-.3 1.4-.77l.36-2.4a2.09 2.09 0 0 0-1.04-.25zm-23.91-.2c-.56 0-1.07.43-1.33 1.35h2.23c.05-.87-.23-1.36-.9-1.36zm18.25 0c-.56 0-1.07.43-1.33 1.35h2.24c.04-.87-.24-1.36-.91-1.36zm-9.7-3.4c.45 0 .78.34.7.82a.96.96 0 0 1-.94.79c-.47 0-.78-.33-.72-.79.08-.48.5-.81.96-.81zm6.12 0c.46 0 .78.34.71.82a.96.96 0 0 1-.95.79c-.46 0-.78-.33-.72-.79.08-.48.51-.81.96-.81z"
    />
  </svg>
)

const PciDssIcon: FC<IconProps> = ({gray}) => (
  <svg width="100%" height="100%" viewBox="0 0 64 24" focusable="false">
    <path
      fill={gray ? '#999' : '#006a70'}
      fillRule="evenodd"
      d="M22.84 2.15A1195.7 1195.7 0 0 0 25.4 6l1.64 2.4 1.75 2.6.74 1.09-1.49.8-3.18 1.72-1.59.85-3.18 1.72-1.7.9-3.14 1.7-1.62.87-2.11 1.12-.14.12h-.08l-.56-.82-1.88-2.7-2.14-3.1-1.8-2.58-2.07-3L.46 6.23l-.44-.59v-.03l.77-.12 1.51-.23 1.32-.2 1.51-.24 1.55-.22 1.6-.25 1.52-.22c.6-.1 1.19-.2 1.79-.28l1.53-.23 1.82-.28 1.32-.21 1.02-.15 1.34-.2 1.07-.16 1.3-.2 1.32-.2.35-.08zM6.6 11.28v3.5c0 .18.03.25.22.24H8.9c.18 0 .23-.05.22-.22v-2.2c0-.15.04-.2.18-.2.36-.02.71-.04 1.06-.09.67-.1 1.3-.29 1.87-.68a2.16 2.16 0 0 0 1.02-2.02c-.06-.87-.57-1.43-1.33-1.78-.63-.3-1.3-.4-1.98-.44a15.14 15.14 0 0 0-3.12.14c-.16.02-.23.08-.22.26v3.49zm13.77 1.16l-.32.18c-.25.12-.48.27-.74.36-.54.2-1.1.24-1.67.18-.82-.08-1.3-.51-1.47-1.29-.1-.48-.1-.96.03-1.43.18-.66.6-1.11 1.28-1.21a4.2 4.2 0 0 1 1.03.02c.49.05.95.18 1.34.52.14.13.31.24.5.37l.02-.16c0-.32-.02-.64.02-.96.03-.3-.1-.48-.3-.67a3.65 3.65 0 0 0-3.37-.96A3.6 3.6 0 0 0 13.9 9.7a4.34 4.34 0 0 0-.08 2.9c.3.96.91 1.65 1.82 2.06.5.23 1.02.35 1.55.39a4.68 4.68 0 0 0 3.07-.66c.1-.06.13-.13.13-.25v-1.5l-.01-.2zm1.17-5.06V15l.2.01h2.04c.16 0 .22-.04.22-.2V7.56c0-.16-.05-.2-.2-.2H21.53zm1.2-.45c1.02 0 1.7-1 1.3-1.9a1.45 1.45 0 0 0-1.62-.77c-.63.14-1.09.65-1.1 1.22-.04.83.56 1.45 1.41 1.45z"
    />
    <path
      fill={gray ? '#999' : '#006a70'}
      fillRule="evenodd"
      d="M9.12 9.88v-.56c0-.1.04-.16.14-.15.34.05.69.08 1.02.16.24.06.41.22.42.5 0 .28-.14.45-.38.56-.34.17-.72.19-1.09.2-.03 0-.1-.08-.1-.13-.02-.2 0-.39 0-.58M30.63 4.8H33c.53 0 .93.04 1.21.13.37.1.7.3.96.58.27.28.47.63.6 1.03.15.4.22.91.22 1.5 0 .53-.07.98-.2 1.36a2.8 2.8 0 0 1-.68 1.12c-.22.22-.52.4-.9.51-.29.1-.67.14-1.14.14h-2.42zm1.29 1.08v4.22h.96c.35 0 .61-.03.77-.07.21-.05.38-.14.52-.26s.25-.33.34-.61c.08-.29.13-.68.13-1.17 0-.5-.05-.87-.13-1.13-.09-.27-.21-.47-.37-.62a1.22 1.22 0 0 0-.6-.3 5.84 5.84 0 0 0-1.05-.06zm4.81 3.22l1.25-.12c.08.41.23.72.46.92.23.2.54.3.93.3.41 0 .72-.1.93-.27a.78.78 0 0 0 .32-.61.58.58 0 0 0-.13-.39c-.1-.1-.25-.2-.47-.27-.15-.05-.49-.15-1.02-.28a3.49 3.49 0 0 1-1.45-.63 1.66 1.66 0 0 1-.31-2.19c.18-.28.44-.5.79-.64.35-.15.76-.22 1.25-.22.8 0 1.4.17 1.8.52.4.35.62.82.64 1.4l-1.28.06c-.06-.33-.18-.56-.36-.7-.18-.15-.45-.22-.81-.22-.37 0-.67.08-.88.23-.13.1-.2.23-.2.4 0 .14.06.27.19.38.16.14.56.28 1.18.43.63.14 1.09.3 1.39.45.3.16.53.38.7.65.17.27.25.61.25 1.01a1.88 1.88 0 0 1-1.16 1.74 3.6 3.6 0 0 1-1.38.23c-.8 0-1.43-.19-1.86-.56a2.43 2.43 0 0 1-.77-1.62m5.93 0l1.25-.12c.07.41.23.72.46.92.23.2.54.3.93.3.41 0 .72-.1.93-.27a.78.78 0 0 0 .32-.61.58.58 0 0 0-.13-.39c-.1-.1-.25-.2-.47-.27-.15-.05-.49-.15-1.03-.28a3.49 3.49 0 0 1-1.44-.63 1.66 1.66 0 0 1-.32-2.19c.19-.28.45-.5.8-.64.34-.15.76-.22 1.25-.22.8 0 1.4.17 1.8.52.4.35.62.82.64 1.4l-1.28.06c-.06-.33-.18-.56-.36-.7-.18-.15-.45-.22-.81-.22-.38 0-.67.08-.88.23-.13.1-.2.23-.2.4 0 .14.06.27.19.38.16.14.55.28 1.18.43.62.14 1.09.3 1.39.45.3.16.53.38.7.65.17.27.25.61.25 1.01a1.88 1.88 0 0 1-1.16 1.74 3.6 3.6 0 0 1-1.39.23c-.8 0-1.42-.19-1.85-.56a2.43 2.43 0 0 1-.77-1.62M32.1 14.45l.43.14a.98.98 0 0 1-.33.54.95.95 0 0 1-.6.18c-.29 0-.53-.1-.72-.3-.2-.2-.29-.48-.29-.83 0-.37.1-.66.29-.87.19-.2.44-.3.75-.3.28 0 .5.08.67.24.1.1.17.23.23.4l-.45.11a.47.47 0 0 0-.16-.27.47.47 0 0 0-.3-.1.5.5 0 0 0-.41.18c-.1.12-.16.3-.16.57 0 .29.06.49.16.6.1.13.23.19.4.19.11 0 .21-.04.3-.12.09-.07.15-.2.19-.36m.73-.28c0-.23.03-.42.1-.57.05-.11.12-.21.2-.3a.86.86 0 0 1 .3-.2c.13-.06.3-.1.47-.1.33 0 .6.1.8.31.19.2.29.49.29.85s-.1.64-.3.84c-.2.2-.45.3-.78.3s-.6-.1-.8-.3c-.19-.2-.28-.47-.28-.83zm.46-.01c0 .25.06.44.17.57.12.13.27.2.45.2s.32-.07.44-.2c.11-.13.17-.32.17-.58 0-.25-.05-.45-.17-.57-.1-.13-.26-.19-.44-.19s-.34.06-.45.2c-.11.12-.17.31-.17.57zM35.33 15.27v-2.23H36l.4 1.52.4-1.52h.68v2.23h-.42v-1.75l-.44 1.75h-.43l-.44-1.75v1.75zM37.93 15.27v-2.23h.72c.27 0 .45.02.54.04.12.03.23.1.32.22.08.1.12.25.12.43 0 .14-.02.25-.07.34a.61.61 0 0 1-.19.22.65.65 0 0 1-.23.1c-.1.03-.26.04-.47.04h-.3v.84zm.45-1.85v.63h.24c.18 0 .3 0 .36-.03a.3.3 0 0 0 .2-.28.29.29 0 0 0-.08-.2.31.31 0 0 0-.18-.1 2.18 2.18 0 0 0-.32-.02zM40.02 15.27v-2.2h.45v1.83h1.11v.37zM41.9 13.04h.44v2.23h-.45zM44.78 15.27h-.5l-.19-.5h-.89l-.18.5h-.48l.87-2.23h.48zm-.83-.88l-.3-.83-.3.83zM45.02 15.27v-2.23h.44l.9 1.5v-1.5h.43v2.23h-.45l-.9-1.45v1.45zM47.76 15.27v-1.85h-.66v-.38h1.77v.38h-.66v1.85z"
    />
  </svg>
)

const MirAcceptIcon: FC<IconProps> = ({gray}) => (
  <svg width="100%" height="100%" viewBox="0 0 64 24" focusable="false">
    <path
      fill={gray ? '#999' : '#00a9e4'}
      fillRule="evenodd"
      d="M13.85 2a9.84 9.84 0 0 1 8.8 5.5h-2.63a7.55 7.55 0 0 0-6.17-3.21c-4.2 0-7.6 3.45-7.6 7.71s3.4 7.71 7.6 7.71a7.57 7.57 0 0 0 6.58-3.86h2.52l-.06.15H49.6c1.69.5 1.37 2.43 1.37 2.43H21.4A9.78 9.78 0 0 1 13.85 22C8.41 22 4 17.52 4 12S8.41 2 13.85 2zM52 10.57v1h-1.4v3.64h-1.2v-3.64h-1.41v-1zm-17.07.25c.15.07.34.19.46.28l.08.07.19.18-.26.38c-.14.22-.27.39-.3.39s-.17-.1-.34-.22c-.38-.26-.71-.32-1.09-.21-.81.24-1.07 1.43-.43 2 .14.11.33.24.43.26.3.08.8-.02 1.09-.22.16-.1.34-.24.35-.23.11.15.5.74.5.79 0 .09-.56.48-.9.59-.37.1-1.14.12-1.48.02-.35-.1-.89-.5-1.1-.82-.27-.4-.36-.8-.32-1.44.04-.9.41-1.48 1.17-1.84a2.88 2.88 0 0 1 1.95.02zm4 0c.17.07.35.19.47.28l.08.07.19.18-.25.38c-.14.22-.28.39-.3.39s-.18-.1-.35-.22c-.38-.26-.71-.32-1.09-.21-.81.24-1.07 1.43-.42 2 .13.11.32.24.42.26.3.08.8-.02 1.09-.22.16-.1.34-.24.35-.23.11.15.5.74.5.79 0 .09-.56.48-.9.59-.37.1-1.14.12-1.48.02-.35-.1-.89-.5-1.09-.82-.27-.4-.37-.8-.33-1.44.04-.9.41-1.48 1.17-1.84a2.88 2.88 0 0 1 1.95.02zm8.78 1.9c0 .14-.4.63-.64.76-.23.12-.39.16-1.22.16h-1.32v1.29h-1.12V12.7zm-4.94-2v.9h-1.62v.71h1.27v.93h-1.27V14h1.62v.93h-2.66V10.7zm-12.45 0l1.41 4.2H30.6l-.28-.85H29.2l-.29.86H27.8l1.4-4.22zm-.56 1.07l-.35 1.35h.7zm-6.08-.5a10.3 10.3 0 0 1 0 1.42zm19.4-.58l1.77.02 1.78.01.23.11c.52.27.8.73.84 1.35v.37h-1.44c-1.36-.01-1.49-.02-1.73-.12a2.2 2.2 0 0 1-1.38-1.49z"
    />
    <path
      fill={gray ? '#999' : '#29b352'}
      fillRule="evenodd"
      d="M27.08 11.32c-.21.6-.66 1.09-1.23 1.35l-.16.06 1.52 2.32h-2.46l-1.12-2.18H22.6v2.18h-2.14v-3.73zm-7.54-3.1v6.83h-2.15V8.2zm-9.53 0c.55 0 1.03.36 1.18.9l.9 3.13h.15l.9-3.14c.15-.53.63-.9 1.18-.9h2.15v6.84h-2.15V11h-.16l-1.23 4.04H11.4L10.17 11h-.15v4.04H7.87V8.2zm10.14 0h4.76a2.31 2.31 0 0 1 2.28 2.63l-.03.15h-3.7a3.38 3.38 0 0 1-3.27-2.6l-.04-.19h4.76z"
    />
  </svg>
)

export const PaymentSecurityIcon: FC<PaymentSecurityIconProps> = ({gray = true, name}) => {
  switch (name) {
    case 'mastercardId':
      return <MastercardIdIcon gray={gray}/>
    case 'mir':
      return <MirAcceptIcon gray={gray}/>
    case 'mastercardSC':
      return <MastercardSCIcon gray={gray}/>
    case 'pci':
      return <PciDssIcon gray={gray}/>
    default:
      return <VisaVerifiedIcon gray={gray}/>
  }
}

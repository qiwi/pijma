import styled, {StyledOptions} from '../styled'

import {Value, cssValue} from './Value'
import {Box, BoxNonProps, BoxProps} from './Box'

export interface CardProps extends BoxProps {
  bg?: string
  s?: string
  b?: string
  bt?: string
  br?: string
  bb?: string
  bl?: string
  r?: Value
  rtr?: Value
  rtl?: Value
  rbr?: Value
  rbl?: Value
}

export const CardNonProps = ['bg', 'b', 'bt', 'br', 'bb', 'bl', 'r', 'rtr', 'rtl', 'btr', 'btl', 's'].concat(BoxNonProps)

export const CardOptions: StyledOptions = {
  shouldForwardProp: (prop) => !CardNonProps.includes(prop),
}

const customScroll = (() => {
  try {
    const element = document.createElement('div')
    document.body.appendChild(element)
    element.style.overflow = 'scroll'
    const result = element.offsetWidth !== element.clientWidth
    document.body.removeChild(element)
    return result
  }
  catch (e) {
    return undefined
  }
})()

export const Card = styled(Box, CardOptions)<CardProps>(({theme, ...props}) => ({
  background: props.bg,
  border: props.b,
  borderTop: props.bt,
  borderRight: props.br,
  borderBottom: props.bb,
  borderLeft: props.bl,
  borderRadius: cssValue(props.r, 1, false),
  borderTopRightRadius: cssValue(props.rtr, 1, false),
  borderTopLeftRadius: cssValue(props.rtl, 1, false),
  borderBottomRightRadius: cssValue(props.rbr, 1, false),
  borderBottomLeftRadius: cssValue(props.rbl, 1, false),
  boxShadow: props.s,
  ...(customScroll ? {
    '&::-webkit-scrollbar': {
      cursor: 'pointer',
      width: 24,
      height: 24,
      background: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 24,
      backgroundClip: 'padding-box',
      border: '8px solid transparent',
      transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    '&::-webkit-scrollbar-button:single-button': {
      pointerEvents: 'none',
      display: 'block',
      height: `calc(${cssValue(props.py || props.pt || props.p, theme.scale) || '8px'} - 8px)`,
      width: `calc(${cssValue(props.px || props.pl || props.p, theme.scale) || '8px'} - 8px)`,
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },
  } : customScroll === undefined ? {
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
  } : {}),
}))

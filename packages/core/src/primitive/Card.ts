import styled from '../styled'

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

export const Card = styled(Box, {
  shouldForwardProp: (prop) => !CardNonProps.includes(prop),
})<CardProps>((props) => ({
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
}))

import styled from '../styled'
import Theme from '../Theme'

import {Value, cssValue} from './Value'
import {Box, BoxProps} from './Box'

export interface CardProps extends BoxProps {
  bg?: keyof Theme['card']['background']
  shadow?: keyof Theme['card']['shadow']
  b?: keyof Theme['card']['border']
  bt?: keyof Theme['card']['border']
  br?: keyof Theme['card']['border']
  bb?: keyof Theme['card']['border']
  bl?: keyof Theme['card']['border']
  r?: Value
  rtr?: Value
  rtl?: Value
  rbr?: Value
  rbl?: Value
}

export const Card = styled(Box, {
  shouldForwardProp: (prop) => !['bg', 'b', 'bt', 'br', 'bb', 'bl', 'r', 'rtr', 'rtl', 'btr', 'btl', 'shadow'].includes(prop),
})<CardProps>((props) => ({
  background: props.bg === undefined ? undefined : props.theme.card.background[props.bg],
  border: props.b === undefined ? undefined : props.theme.card.border[props.b],
  borderTop: props.bt === undefined ? undefined : props.theme.card.border[props.bt],
  borderRight: props.br === undefined ? undefined : props.theme.card.border[props.br],
  borderBottom: props.bb === undefined ? undefined : props.theme.card.border[props.bb],
  borderLeft: props.bl === undefined ? undefined : props.theme.card.border[props.bl],
  borderRadius: cssValue(props.r, 1, false),
  borderTopRightRadius: cssValue(props.rtr, 1, false),
  borderTopLeftRadius: cssValue(props.rtl, 1, false),
  borderBottomRightRadius: cssValue(props.rbr, 1, false),
  borderBottomLeftRadius: cssValue(props.rbl, 1, false),
  boxShadow: props.shadow === undefined ? undefined : props.theme.card.shadow[props.shadow],
}))

import styled from '../styled'

import {Value, cssValue} from './Value'
import {Box, BoxProps} from './Box'

export interface PosProps extends BoxProps {
  type?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
  zIndex?: number
  top?: Value
  right?: Value
  bottom?: Value
  left?: Value
}

const shouldForwardProp = (prop: string) => !['type', 'zIndex', 'top', 'right', 'bottom', 'left'].includes(prop)

export const Pos = styled(Box, {
  shouldForwardProp,
})<PosProps>(({theme, type, zIndex, top, right, bottom, left}) => ({
  position: type,
  zIndex: zIndex,
  top: cssValue(top, theme.scale),
  right: cssValue(right, theme.scale),
  bottom: cssValue(bottom, theme.scale),
  left: cssValue(left, theme.scale),
}))

import { styled, StyledOptions } from '../styled'
import { Box } from './Box'
import { cssValue, Value } from './Value'

export interface PosProps {
  type?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
  zIndex?: number | 'auto'
  top?: Value
  right?: Value
  bottom?: Value
  left?: Value
}

export const PosNonProps: PropertyKey[] = [
  'type',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
]

export const PosOptions: StyledOptions<PosProps> = {
  shouldForwardProp: (prop) => !PosNonProps.includes(prop),
}

export const Pos = styled(
  Box,
  PosOptions,
)<PosProps>(({ theme, ...props }) => ({
  position: props.type,
  zIndex: props.zIndex,
  top: cssValue(props.top, theme.scale),
  right: cssValue(props.right, theme.scale),
  bottom: cssValue(props.bottom, theme.scale),
  left: cssValue(props.left, theme.scale),
}))

Pos.displayName = 'Pos'

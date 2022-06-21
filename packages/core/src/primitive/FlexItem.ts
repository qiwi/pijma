import { styled, StyledOptions } from '../styled'
import { Box } from './Box'
import { cssValue, Value } from './Value'

export interface FlexItemProps {
  basis?: Value
  grow?: number
  shrink?: number
  align?: string
  justify?: string
}

export const FlexItemNonProps: PropertyKey[] = [
  'basis',
  'grow',
  'shrink',
  'align',
  'justify',
]

export const FlexItemOptions: StyledOptions<FlexItemProps> = {
  shouldForwardProp: (prop) => !FlexItemNonProps.includes(prop),
}

export const FlexItem = styled(
  Box,
  FlexItemOptions,
)<FlexItemProps>(({ theme, basis, grow, shrink, align, justify }) => ({
  flexBasis: cssValue(basis, theme.scale),
  flexGrow: grow,
  flexShrink: shrink,
  alignSelf: align,
  justifySelf: justify,
}))

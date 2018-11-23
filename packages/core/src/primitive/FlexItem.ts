import styled from '../styled'

import {Value, cssValue} from './Value'
import {Box, BoxProps} from './Box'

export interface FlexItemProps extends BoxProps {
  basis?: Value
  grow?: number
  shrink?: number
  align?: string
  justify?: string
}
export const FlexItem = styled(Box, {
  shouldForwardProp: (prop) => !['basis', 'grow', 'shrink', 'align', 'justify'].includes(prop),
})<FlexItemProps>(({theme, basis, grow, shrink, align, justify}) => ({
  flexBasis: cssValue(basis, theme.scale),
  flexGrow: grow,
  flexShrink: shrink,
  alignSelf: align,
  justifySelf: justify,
}))

import styled from '../styled'

import {Value, cssValue} from './Value'
import {Box, BoxNonProps, BoxProps} from './Box'

export interface FlexItemProps extends BoxProps {
  basis?: Value
  grow?: number
  shrink?: number
  align?: string
  justify?: string
}

export const FlexItemNonProps = BoxNonProps.concat(['basis', 'grow', 'shrink', 'align', 'justify'])

export const FlexItem = styled(Box, {
  shouldForwardProp: (prop) => !FlexItemNonProps.includes(prop),
})<FlexItemProps>(({theme, basis, grow, shrink, align, justify}) => ({
  flexBasis: cssValue(basis, theme.scale),
  flexGrow: grow,
  flexShrink: shrink,
  alignSelf: align,
  justifySelf: justify,
}))

FlexItem.displayName = 'FlexItem'

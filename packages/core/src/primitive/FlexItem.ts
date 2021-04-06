import styled, {StyledOptions} from '../styled'

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

export const FlexItemOptions: StyledOptions<Record<string, any>> = {
  shouldForwardProp: (prop) => !FlexItemNonProps.includes(prop as string),
}

export const FlexItem = styled(Box, FlexItemOptions)<FlexItemProps>(({theme, basis, grow, shrink, align, justify}) => ({
  flexBasis: cssValue(basis, theme.scale),
  flexGrow: grow,
  flexShrink: shrink,
  alignSelf: align,
  justifySelf: justify,
}))

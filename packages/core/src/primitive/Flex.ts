import styled from '../styled'

import {Value, cssValue} from './Value'
import {Box, BoxProps} from './Box'

export interface FlexProps extends BoxProps {
  display?: 'flex'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  align?: string
  justify?: string
}

export interface FlexItemProps extends BoxProps {
  basis?: Value
  grow?: number
  shrink?: number
  align?: string
  justify?: string
}

const shouldForwardProp = (prop: string) => !['wrap', 'direction', 'grow', 'basis', 'shrink', 'align', 'justify'].includes(prop)

export const Flex = styled(Box, {
  shouldForwardProp,
})<FlexProps>(({wrap, direction, align, justify}) => ({
  display: 'flex',
  flexWrap: wrap,
  flexDirection: direction,
  alignItems: align,
  justifyContent: justify,
}))

export const FlexItem = styled(Box, {
  shouldForwardProp,
})<FlexItemProps>(({theme, basis, grow, shrink, align, justify}) => ({
  flexBasis: cssValue(basis, theme.scale),
  flexGrow: grow,
  shrink: shrink,
  alignSelf: align,
  justifySelf: justify,
}))

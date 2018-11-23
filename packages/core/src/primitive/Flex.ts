import styled from '../styled'

import {Box, BoxProps} from './Box'

export interface FlexProps extends BoxProps {
  display?: 'flex'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  align?: string
  justify?: string
}

export const Flex = styled(Box, {
  shouldForwardProp: (prop) => !['display', 'wrap', 'direction', 'align', 'justify'].includes(prop),
})<FlexProps>(({wrap, direction, align, justify}) => ({
  display: 'flex',
  flexWrap: wrap,
  flexDirection: direction,
  alignItems: align,
  justifyContent: justify,
}))

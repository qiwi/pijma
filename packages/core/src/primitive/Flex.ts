import styled, {StyledOptions} from '../styled'

import {Box, BoxNonProps, BoxProps} from './Box'

export interface FlexProps extends BoxProps {
  display?: 'flex' | 'inline-flex'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  align?: string
  justify?: string
}

export const FlexNonProps = BoxNonProps.concat(['wrap', 'direction', 'align', 'justify'])

export const FlexOptions: StyledOptions<Record<string, any>> = {
  shouldForwardProp: (prop) => !FlexNonProps.includes(prop as string),
}

export const Flex = styled(Box, FlexOptions)<FlexProps>(({wrap, direction, align, justify}) => ({
  flexWrap: wrap,
  flexDirection: direction,
  alignItems: align,
  justifyContent: justify,
}))

Flex.defaultProps = {
  display: 'flex',
}

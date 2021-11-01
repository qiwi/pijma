import {styled, StyledOptions} from '../styled'

import {Box} from './Box'

export interface FlexProps {
  display?: 'flex' | 'inline-flex'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  align?: string
  justify?: string
}

export const FlexNonProps: PropertyKey[] = ['wrap', 'direction', 'align', 'justify']

export const FlexOptions: StyledOptions<FlexProps> = {
  shouldForwardProp: (prop) => !FlexNonProps.includes(prop),
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

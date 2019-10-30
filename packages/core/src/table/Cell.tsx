import styled from '../styled'

import {Box, BoxNonProps, BoxProps} from '../primitive'

export interface CellProps extends BoxProps {}

export const CellNonProps = BoxNonProps.concat([])

export const Cell = styled(Box.withComponent('td'), {
  shouldForwardProp: prop => !CellNonProps.includes(prop),
})<CellProps>(() => ({}))

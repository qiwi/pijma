import styled from '../styled'

import {Box, BoxNonProps, BoxProps} from '../primitive'

export interface RowProps extends BoxProps {}

export const RowNonProps = BoxNonProps.concat([])

export const Row = styled(Box.withComponent('tr'), {
  shouldForwardProp: prop => !RowNonProps.includes(prop),
})<RowProps>(() => ({}))

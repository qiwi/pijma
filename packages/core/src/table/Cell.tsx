import styled from '../styled'

import {Card, CardNonProps, CardProps} from '../primitive'

export interface CellProps extends CardProps {}

export const CellNonProps = CardNonProps.concat([])

export const Cell = styled(Card.withComponent('td'), {
  shouldForwardProp: prop => !CellNonProps.includes(prop),
})<CellProps>(() => ({}))

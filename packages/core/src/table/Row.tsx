import styled from '../styled'

import {Card, CardNonProps, CardProps} from '../primitive'

export interface RowProps extends CardProps {}

export const RowNonProps = CardNonProps.concat([])

export const Row = styled(Card.withComponent('tr'), {
  shouldForwardProp: prop => !RowNonProps.includes(prop),
})<RowProps>(() => ({}))

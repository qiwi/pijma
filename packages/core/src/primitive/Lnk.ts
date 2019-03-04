import styled from '../styled'

import {Card, CardProps, CardNonProps} from './Card'

export interface LnkProps extends CardProps {
}

export const LnkNonProps = CardNonProps

export const Lnk = styled(Card.withComponent('a'), {
  shouldForwardProp: (prop) => !LnkNonProps.includes(prop),
})<LnkProps>(()=>({
  textDecoration: 'none',
  cursor: 'pointer',
}))

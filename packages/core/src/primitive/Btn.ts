import styled from '../styled'

import {Card, CardProps, CardNonProps} from './Card'

export interface BtnProps extends CardProps {
}

export const BtnNonProps = CardNonProps

export const Btn = styled(Card.withComponent('button'), {
  shouldForwardProp: (prop) => !BtnNonProps.includes(prop),
})<BtnProps>(() => ({}))

Btn.defaultProps = {
  display: 'inline-block',
  p: 0,
  m: 0,
  s: '',
}

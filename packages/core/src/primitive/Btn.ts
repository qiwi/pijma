import styled from '../styled'

import {Card, CardProps, CardNonProps} from './Card'

export interface BtnProps extends CardProps {
}

export const BtnNonProps = CardNonProps

export const Btn = styled(Card, {
  shouldForwardProp: (prop) => !BtnNonProps.includes(prop),
})<BtnProps>().withComponent('button')

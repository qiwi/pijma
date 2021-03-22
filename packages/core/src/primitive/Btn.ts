import styled, {StyledOptions} from '../styled'

import {Card, CardProps, CardNonProps} from './Card'

export interface BtnProps extends CardProps {
}

export const BtnNonProps = CardNonProps

export const BtnOptions: StyledOptions = {
  shouldForwardProp: (prop) => !BtnNonProps.includes(prop),
}

export const Btn = styled(Card, BtnOptions)<BtnProps>().withComponent('button')

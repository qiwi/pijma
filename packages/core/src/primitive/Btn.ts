import { styled, StyledOptions } from '../styled'
import { BoxNonProps, BoxProps, BoxStyles } from './Box'
import { CardNonProps, CardProps, CardStyles } from './Card'

export interface BtnProps extends BoxProps, CardProps {}

export const BtnNonProps: PropertyKey[] = [...BoxNonProps, ...CardNonProps]

export const BtnOptions: StyledOptions<BtnProps> = {
  shouldForwardProp: (prop) => !BtnNonProps.includes(prop),
}

export const Btn = styled('button', BtnOptions)<BtnProps>(BoxStyles, CardStyles)

Btn.displayName = 'Btn'

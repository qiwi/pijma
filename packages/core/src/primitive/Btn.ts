import {styled, StyledOptions} from '../styled'

import {CardNonProps, CardProps, CardStyles} from './Card'
import {BoxNonProps, BoxProps, BoxStyles} from './Box'

export interface BtnProps extends BoxProps, CardProps {
}

export const BtnNonProps: PropertyKey[] = [
  ...BoxNonProps,
  ...CardNonProps,
]

export const BtnOptions: StyledOptions<BtnProps> = {
  shouldForwardProp: (prop) => !BtnNonProps.includes(prop),
}

export const Btn = styled('button', BtnOptions)<BtnProps>(BoxStyles, CardStyles)

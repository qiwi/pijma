import {styled, StyledOptions} from '../styled'

import {BoxStyles, BoxNonProps, BoxProps} from './Box'

export interface FrmProps extends BoxProps {
}

export const FrmNonProps: PropertyKey[] = [
  ...BoxNonProps,
]

export const FrmOptions: StyledOptions<FrmProps> = {
  shouldForwardProp: (prop) => !FrmNonProps.includes(prop),
}

export const Frm = styled('form', FrmOptions)<FrmProps>(BoxStyles)

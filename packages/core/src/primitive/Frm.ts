import { styled, StyledOptions } from '../styled'
import { BoxNonProps, BoxProps, BoxStyles } from './Box'

export type FrmProps = BoxProps

export const FrmNonProps: PropertyKey[] = [...BoxNonProps]

export const FrmOptions: StyledOptions<FrmProps> = {
  shouldForwardProp: (prop) => !FrmNonProps.includes(prop),
}

export const Frm = styled('form', FrmOptions)<FrmProps>(BoxStyles)

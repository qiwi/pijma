import styled, {StyledOptions} from '../styled'

import {Box, BoxProps, BoxNonProps} from './Box'

export interface FrmProps extends BoxProps {
}

export const FrmNonProps = BoxNonProps

export const FrmOptions: StyledOptions = {
  shouldForwardProp: (prop) => !FrmNonProps.includes(prop as string),
}

export const Frm = styled(Box, FrmOptions)<FrmProps>().withComponent('form')

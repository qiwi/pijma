import styled from '../styled'

import {Box, BoxProps, BoxNonProps} from './Box'

export interface FrmProps extends BoxProps {
}

export const FrmNonProps = BoxNonProps

export const Frm = styled(Box, {
  shouldForwardProp: (prop) => !FrmNonProps.includes(prop),
})<FrmProps>().withComponent('form')

import { MaskedInput } from '../mask'
import { styled } from '../styled'
import { Input } from './Input'

export const MaskInput = styled(Input)().withComponent(MaskedInput)

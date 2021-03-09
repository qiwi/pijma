import ReactTextMask from 'react-text-mask'

import styled from '../styled'

import {Input} from './Input'

export const MaskInput = styled(Input)().withComponent(ReactTextMask)

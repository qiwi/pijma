import ReactTextMask from 'react-text-mask'

import styled from '../styled'

import {Input, InputOptions} from './Input'

export const MaskInput = styled(Input, InputOptions)().withComponent(ReactTextMask)

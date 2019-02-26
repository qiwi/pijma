import styled from '../styled'

import {Input, InputProps} from './Input'

export const TextArea = styled(Input.withComponent('textarea'))<InputProps>(() => ({
  resize: 'none',
  overflowY: 'auto'
}))

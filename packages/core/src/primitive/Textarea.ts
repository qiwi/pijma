import styled from '../styled'

import { Input, InputProps } from './Input'

export const Textarea = styled(Input.withComponent('textarea'))<InputProps>(() => ({
  resize: 'none',
}))

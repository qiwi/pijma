import styled from '../styled'

import { cssValue, pxValue } from './Value'
import { Input, InputProps } from './Input'

export const Textarea = styled(Input.withComponent('textarea'))<InputProps>(({ theme, ...props }) => ({
  resize: 'none',
  minHeight: pxValue(props.valueSize, theme.scale * 2),
  height: cssValue(props.height, theme.scale),
  overflow: 'hidden',
}))

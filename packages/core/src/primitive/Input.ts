import {Interpolation} from 'emotion'

import styled from '../styled'
import Theme from '../Theme'

export interface InputProps {
  error?: boolean
  disabled?: boolean
  focused?: boolean
  appearance?: keyof Theme['input']
  css?: Interpolation
}

export const Input = styled('input', {
  shouldForwardProp: (prop) => !['error', 'focused', 'appearance', 'css'].includes(prop),
})<InputProps>(({theme, appearance, css, ...props}) => [appearance ? theme.input[appearance](props) : undefined, css])


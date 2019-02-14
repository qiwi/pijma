import styled from '../styled'

import { Input, InputProps, InputNonProps } from './Input'

export interface TextareaProps extends InputProps {
  resize?: 'auto' | 'none'
}

export const TextareaNonProps = [
  'resize', 
].concat(InputNonProps)

export const Textarea = styled(Input.withComponent('textarea'), {
  shouldForwardProp: (prop) => !TextareaNonProps.includes(prop),
})<TextareaProps>(({theme, ...props}) => ({
  resize: props.resize,
}))

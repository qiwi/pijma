import React, { FunctionComponent } from 'react'

import { Textarea } from '../primitive'


export interface TextareaProps {
  value?: string
}

const SimpleTextarea: FunctionComponent<TextareaProps> = (props) => (
  <Textarea {...props}/>
)

export default SimpleTextarea

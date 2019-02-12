import React, { FunctionComponent } from 'react'

import { Textarea } from '@qiwi/pijma-core'

export interface TextareaProps {
  value?: string
}
const TextareaField: FunctionComponent<TextareaProps> = ({ value }) => (
  <Textarea value={value} />
)

export default TextareaField

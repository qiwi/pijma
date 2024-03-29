import React, { FC, ReactNode } from 'react'

import { Frm, Value } from '../primitive'
import { FormControl } from './FormControl'

export interface FormProps {
  width?: Value
  minWidth?: Value
  maxWidth?: Value
  height?: Value
  minHeight?: Value
  maxHeight?: Value
  onSubmit?: () => void
  children?: ReactNode
}

export const Form: FC<FormProps> = ({ onSubmit, ...props }) => (
  <FormControl
    onSubmit={onSubmit}
    children={(renderProps) => (
      <Frm onSubmit={renderProps.onSubmit} {...props} />
    )}
  />
)

Form.displayName = 'Form'

import React, {FC} from 'react'

import {FormControl} from './FormControl'
import {FrmProps, Frm} from '../primitive'

export interface FormProps extends FrmProps {
  onSubmit?: () => void
}

export const Form: FC<FormProps> = ({onSubmit, ...props}) => (
  <FormControl
    onSubmit={onSubmit}
    children={(renderProps) => (
      <Frm onSubmit={renderProps.onSubmit} {...props}/>
    )}
  />
)

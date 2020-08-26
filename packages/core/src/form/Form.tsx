import React, {FC, ReactFragment} from 'react'

import {FormControl} from './FormControl'
import {FormContext} from '../FormContext'

export interface FormProps {
  errors?: Record<string, React.ReactNode>
  validate: () => Record<string, React.ReactNode>
  onSubmit: () => void
  children: (renderProps: any) => ReactFragment
}

export const Form: FC<FormProps> = (props) => (
  <FormControl
    validate={props.validate}
    onSubmit={props.onSubmit}
    errors={props.errors || {}}
    children={renderProps => (
      <FormContext.Provider
        value={{onChange: renderProps.onChangeItem, onBlur: renderProps.onBlurItem}}
      >
        <form onSubmit={renderProps.onSubmit} style={{height: '100%'}}>
          {props.children(renderProps)}
        </form>
      </FormContext.Provider>
    )}
  />
)

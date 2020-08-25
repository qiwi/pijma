import React, {FC, ReactFragment} from 'react'
import {FormControl} from './FormControl'

export interface FormProps {
  errors: Record<string, string>
  onChange: () => Record<string, string>
  onSubmit: () => void
  children: (renderProps: any) => ReactFragment
}

export const Form: FC<FormProps> = (props) => (
  <FormControl
    onChange={props.onChange}
    onSubmit={props.onSubmit}
    children={renderProps => (
      <form onSubmit={props.onSubmit} css={{height: '100%'}}>
        {props.children(renderProps)}
      </form>
    )}
  />
)

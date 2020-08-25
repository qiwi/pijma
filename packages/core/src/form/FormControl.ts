import React from 'react'

import RenderChild from '../RenderChild'

export interface FormControlProps {
  onChange: () => Record<string, string>
  onSubmit: () => void
  children: RenderChild<{
    errors: Record<string, string>
    onBlur: (event: React.FocusEvent) => void
  }>
}

export interface FormControlState {
  validatedFields: Record<string, string>
}

export class FormControl extends React.Component<FormControlProps> {

  public state: FormControlState = {
    validatedFields: {},
  }

  private onBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    const errors = this.props.onChange()
    const targetName = e.target.getAttribute('name')
    if (targetName && errors[targetName]) {
      this.setState((prevState: FormControlState) => ({
        validatedFields: {
          ...prevState.validatedFields,
          [targetName]: errors[targetName],
        },
      }))
    }
  }

  public render() {
    return this.props.children({
      errors: this.state.validatedFields,
      onBlur: this.onBlur,
    })
  }

}

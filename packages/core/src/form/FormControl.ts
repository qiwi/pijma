import React from 'react'

import RenderChild from '../RenderChild'

export interface FormControlProps {
  validate: () => Record<string, React.ReactNode>
  onSubmit: () => void
  children: RenderChild<{
    errors: Record<string, React.ReactNode>
    onBlurItem: (event: React.FocusEvent) => void
    onChangeItem: (event: React.ChangeEvent) => void
  }>
}

export interface FormControlState {
  validatedFields: Record<string, React.ReactNode>
}

export class FormControl extends React.Component<FormControlProps> {

  public state: FormControlState = {
    validatedFields: {},
  }

  private onBlurItem: React.FocusEventHandler = (e: React.FocusEvent) => {
    const errors = this.props.validate()
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

  private onChangeItem: React.ChangeEventHandler = (e: React.ChangeEvent) => {
    const targetName = e.target.getAttribute('name')
    if (targetName && this.state.validatedFields[targetName]) {
      const validatedFields = {...this.state.validatedFields}
      delete validatedFields[targetName]
      this.setState({
        validatedFields,
      })
    }
  }

  public render() {
    return this.props.children({
      errors: this.state.validatedFields,
      onBlurItem: this.onBlurItem,
      onChangeItem: this.onChangeItem,
    })
  }

}

import React from 'react'
import RenderChild from '../RenderChild'

export interface FormControlProps {
  onSubmit?: () => void
  children: RenderChild<{
    onSubmit: React.FormEventHandler
  }>
}

export class FormControl extends React.Component<FormControlProps> {

  private onSubmit: React.FormEventHandler = (event) => {
    event.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
  }

  public render() {
    return this.props.children({
      onSubmit: this.onSubmit,
    })
  }

}

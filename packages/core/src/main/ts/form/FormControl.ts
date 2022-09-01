import { Component, FC, FormEventHandler } from 'react'

export interface FormControlProps {
  onSubmit?: () => void
  children: FC<{
    onSubmit: FormEventHandler
  }>
}

export class FormControl extends Component<FormControlProps> {
  public static displayName = 'FormControl'

  private onSubmit: FormEventHandler = (event) => {
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

import React, {Component} from 'react'

import {PasswordField, CheckboxField} from '@qiwi/pijma-desktop'
import {QuestionIcon} from '@qiwi/pijma-media'

interface State {
  features: string[]
  value: string
}

export default class PasswordFieldExample extends Component<{}, State> {

  public constructor(props: {}) {
    super(props)
    this.state = {
      features: ['help', 'hint', 'action', 'viewed'],
      value: '',
    }
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px', verticalAlign: 'top', width: '50%'}}>
            <PasswordField
              name="password"
              title="password"
              disabled={this.state.features.includes('disabled')}
              viewed={this.state.features.includes('viewed')}
              error={this.state.features.includes('error') ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.features.includes('maxLength') ? 10 : undefined}
              hint={this.state.features.includes('hint') ? <QuestionIcon/> : undefined}
              help={this.state.features.includes('help') ? 'Подсказка' : undefined}
              action={this.state.features.includes('action') ? <a href="#">action</a> : undefined}
              placeholder={this.state.features.includes('placeholder') ? 'Плейсхолдер' : undefined}
              value={this.state.value}
              onChange={(value) => this.setState({value})}
            />
          </td>
          <td style={{padding: '10px', verticalAlign: 'top'}}>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'placeholder',
                value: 'placeholder',
              }, {
                label: 'error',
                value: 'error',
              }, {
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }, {
                label: 'action',
                value: 'action',
              }, {
                label: 'viewed',
                value: 'viewed',
              }, {
                label: 'maxLength',
                value: 'maxLength',
              }]}
              values={this.state.features}
              onChange={(features) => this.setState({features})}
            />
          </td>
        </tr>
        </tbody>
      </table>
    )
  }

}

import React, {Component} from 'react'

import {TextField, RadioField, CheckboxField} from '@qiwi/pijma-mobile'
import {QuestionIcon} from '@qiwi/pijma-media'

interface State {
  features: string[]
  value: string
  type: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
}

export default class TextFieldExample extends Component<{}, State> {

  public state: State = {
    features: ['help', 'hint', 'action'],
    value: '',
    type: 'text',
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px'}}>
            <TextField
              type={this.state.type}
              name={this.state.type}
              title={this.state.type}
              disabled={this.state.features.includes('disabled')}
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
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
            <RadioField
              options={[{
                label: 'text',
                value: 'text',
              }, {
                label: 'password',
                value: 'password',
              }, {
                label: 'tel',
                value: 'tel',
              }, {
                label: 'number',
                value: 'number',
              }, {
                label: 'search',
                value: 'search',
              }, {
                label: 'email',
                value: 'email',
              }, {
                label: 'url',
                value: 'url',
              }]}
              value={this.state.type}
              onChange={(type) => this.setState({type})}
            />
          </td>
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
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

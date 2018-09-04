import React, {Component} from 'react'

import {MaskTextField, RadioField, CheckboxField} from '@qiwi/pijma-desktop'
import {QuestionIcon} from '@qiwi/pijma-media'
import {createNumberMask} from '@qiwi/pijma-core'

interface State {
  features: string[]
  value: string
  type: undefined | 'text' | 'password' | 'tel',
  mask: 'phone' | 'amount'
}

export default class MaskTextFieldExample extends Component<{}, State> {

  public state: State = {
    features: ['help', 'hint', 'action'],
    value: '',
    type: undefined,
    mask: 'phone'
  }

  public render() {
    const mask = this.state.mask === 'phone'
      ? ['(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
      : createNumberMask()

    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px', verticalAlign: 'top', width: '50%'}}>
            <MaskTextField
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
              mask={mask}
              onChange={(value) => this.setState({value})}
            />
          </td>
          <td style={{padding: '10px', verticalAlign: 'top'}}>
            <span>Type</span>
            <RadioField
              options={[{
                label: 'undefined',
                value: undefined,
              }, {
                label: 'text',
                value: 'text',
              }, {
                label: 'password',
                value: 'password',
              }, {
                label: 'tel',
                value: 'tel',
              }]}
              value={this.state.type}
              onChange={(type) => this.setState({type})}
            />
            <br/>
            <span>Mask</span>
            <RadioField
              options={[{
                label: 'phone',
                value: 'phone',
              }, {
                label: 'amount',
                value: 'amount',
              }]}
              value={this.state.mask}
              onChange={(mask) => this.setState({mask})}
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

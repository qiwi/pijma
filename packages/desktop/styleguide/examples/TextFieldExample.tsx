import React, {Component} from 'react'

import {createNumberMask, createFilterMask, Mask} from '@qiwi/pijma-core'
import {QuestionIcon} from '@qiwi/pijma-media'
import {TextField, RadioField, CheckboxField} from '@qiwi/pijma-desktop'

const phoneMask = ['(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

const latinMask = createFilterMask(/[a-zA-Z\s-]/)

const amountMask = createNumberMask({
  suffix: ' ₽',
  decimalLimit: 2,
  requireDecimal: true,
  integerLimit: 20,
})

interface State {
  features: string[]
  value: string
  mask: Mask | undefined
  type: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
}

export default class TextFieldExample extends Component<{}, State> {

  public state: State = {
    features: ['help', 'hint', 'action'],
    value: '',
    mask: undefined,
    type: 'text',
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px'}} colSpan={3}>
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
              mask={this.state.mask}
              value={this.state.value}
              onChange={(value) => this.setState({value})}
            />
            <br/>
            <br/>
            <RadioField
              title="Mask"
              options={[{
                label: 'undefined',
                value: undefined,
              }, {
                label: 'phone',
                value: phoneMask,
              }, {
                label: 'latin',
                value: latinMask,
              }, {
                label: 'amount',
                value: amountMask,
              }]}
              value={this.state.mask}
              onChange={(mask) => this.setState({mask})}
            />
          </td>
          <td style={{padding: '10px'}}>
            <RadioField
              title="Type"
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
          <td style={{padding: '10px'}}>
            <CheckboxField
              title="Options"
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

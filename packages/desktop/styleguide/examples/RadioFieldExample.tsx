import React, {Component} from 'react'

import {QuestionIcon} from '@qiwi/pijma-media'
import {RadioField, CheckboxField} from '@qiwi/pijma-desktop'

interface State {
  features: string[]
  value: string
}

export default class RadioFieldExample extends Component<{}, State> {

  public state: State = {
    features: ['hint', 'help'],
    value: 'banana',
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px', verticalAlign: 'top', width: '50%'}}>
            <RadioField
              title="Radio"
              hint={this.state.features.includes('hint') ? <QuestionIcon/> : null}
              help={this.state.features.includes('help') ? 'Вариант дополнительной подсказки. Больший объем текста увеличивает отступ от текста подсказки до следующего поля' : null}
              options={[{
                label: 'Banana',
                description: 'yellow fruit',
                value: 'banana',
                disabled: true,
              }, {
                label: 'Apple',
                description: 'green, red or yellow fruit',
                value: 'apple',
                disabled: false,
              }, {
                label: 'Mango',
                description: 'another yellow fruit',
                value: 'mango',
                disabled: false,
              }]}
              value={this.state.value}
              onChange={(value) => this.setState({value})}
            />
          </td>
          <td style={{padding: '10px', verticalAlign: 'top'}}>
            <CheckboxField
              options={[{
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
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

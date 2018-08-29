import React, {Component} from 'react'

import {QuestionIcon} from '@qiwi/pijma-media'
import {CheckboxField} from '@qiwi/pijma-mobile'

interface State {
  features: string[]
  values: string[]
}

export default class CheckboxFieldExample extends Component<{}, State> {

  public state: State = {
    features: ['hint', 'help'],
    values: ['banana'],
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px'}}>
            <CheckboxField
              title="Checkbox"
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
              values={this.state.values}
              onChange={(values) => this.setState({values})}
            />
          </td>
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
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

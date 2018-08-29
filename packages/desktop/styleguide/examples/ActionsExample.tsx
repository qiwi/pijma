import React, {Component} from 'react'

import {Actions, ActionsSize, Button, RadioField, CheckboxField} from '@qiwi/pijma-desktop'

interface State {
  features: string[]
  size: ActionsSize
}

export default class ActionsExample extends Component<{}, State> {

  public state: State = {
    features: [],
    size: 'accent',
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px', verticalAlign: 'top', width: '50%'}}>
            <Actions
              size={this.state.size}
              vertical={this.state.features.includes('vertical')}
            >
              <Button
                type="button"
                kind="brand"
                size={this.state.size}
                text="Оплатить"
              />
              <Button
                type="button"
                kind="simple"
                size={this.state.size}
                text="Отменить"
              />
            </Actions>
          </td>
          <td style={{padding: '10px', verticalAlign: 'top'}}>
            <RadioField
              options={[{
                label: 'accent',
                value: 'accent',
              }, {
                label: 'normal',
                value: 'normal',
              }, {
                label: 'minor',
                value: 'minor',
              }]}
              value={this.state.size}
              onChange={(size) => this.setState({size})}
            />
          </td>
          <td style={{padding: '10px', verticalAlign: 'top'}}>
            <CheckboxField
              options={[{
                label: 'vertical',
                value: 'vertical',
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

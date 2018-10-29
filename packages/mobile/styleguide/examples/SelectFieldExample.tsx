import React, {Component} from 'react'

import {SelectField, CheckboxField} from '@qiwi/pijma-mobile'

interface State {
  features: string[]
  value: string
}

export default class SelectFieldExample extends Component<{}, State> {

  public state: State = {
    features: [],
    value: '',
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
          <tr>
            <td style={{padding: '10px'}}>
              <SelectField

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

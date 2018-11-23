import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {SimpleModal, Actions, Button, CheckboxField, Heading} from '@qiwi/pijma-desktop'
import RadioField from '@qiwi/pijma-desktop/radio-field/RadioField'

interface State {
  features: string[]
  show: boolean
  size: 's' | 'm' | 'l',
}

export default class SimpleModalExample extends Component<{}, State> {

  public state: State = {
    features: [],
    show: false,
    size: 'm',
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px', verticalAlign: 'top', width: '50%'}}>
            <Actions size="normal">
              <Button
                kind="simple"
                size="normal"
                type="button"
                text="Open Modal"
                onClick={() => this.setState({show: !this.state.show})}
              />
            </Actions>
            <SimpleModal
              show={this.state.show}
              closable={this.state.features.includes('closable')}
              escapeClose={this.state.features.includes('escapeClose')}
              backdropClose={this.state.features.includes('backdropClose')}
              size={this.state.size}
              onHide={() => this.setState({show: false})}
              children={(
                <Spacer size="xxl">
                  <Heading size="2">Modal</Heading>
                  <Actions size="normal">
                    <Button
                      kind="brand"
                      size="normal"
                      type="button"
                      text="Close Modal"
                      onClick={() => this.setState({show: !this.state.show})}
                    />
                  </Actions>
                </Spacer>
              )}
            />
          </td>
          <td style={{padding: '10px', verticalAlign: 'top'}}>
            <RadioField
              options={[{
                label: 'l',
                value: 'l',
              }, {
                label: 'm',
                value: 'm',
              }, {
                label: 's',
                value: 's',
              }]}
              value={this.state.size}
              onChange={(size) => this.setState({size})}
            />
          </td>
          <td style={{padding: '10px', verticalAlign: 'top'}}>
            <CheckboxField
              options={[{
                label: 'closable',
                value: 'closable',
              }, {
                label: 'escapeClose',
                value: 'escapeClose',
              }, {
                label: 'backdropClose',
                value: 'backdropClose',
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

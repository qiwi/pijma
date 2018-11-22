import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {SimpleModal, Actions, Button, CheckboxField, Heading} from '@qiwi/pijma-desktop'

interface State {
  features: string[]
  show: boolean
}

export default class SimpleModalExample extends Component<{}, State> {

  public state: State = {
    features: [],
    show: false,
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
              compact={this.state.features.includes('compact')}
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
              }, {
                label: 'compact',
                value: 'compact',
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

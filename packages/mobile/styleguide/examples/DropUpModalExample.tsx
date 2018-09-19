import React, {Component, Fragment} from 'react'

import {DropUpModal, Actions, Button, CheckboxField} from '@qiwi/pijma-mobile'

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
          <td style={{padding: '10px'}}>
            <Actions>
              <Button
                kind="simple"
                type="button"
                text="Open DropUp"
                onClick={() => this.setState({show: !this.state.show})}
              />
            </Actions>
            <DropUpModal
              show={this.state.show}
              closable={this.state.features.includes('closable')}
              escapeClose={this.state.features.includes('escapeClose')}
              backdropClose={this.state.features.includes('backdropClose')}
              onHide={() => this.setState({show: false})}
              children={(
                <Fragment>
                  <strong>Modal</strong>
                  <br/>
                  <br/>
                  <Actions>
                    <Button
                      kind="brand"
                      type="button"
                      text="Close DropUp"
                      onClick={() => this.setState({show: !this.state.show})}
                    />
                  </Actions>
                </Fragment>
              )}
            />
          </td>
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
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

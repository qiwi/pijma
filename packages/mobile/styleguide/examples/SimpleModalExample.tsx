import React, {Component, Fragment} from 'react'

import {SimpleModal, Actions, Button, CheckboxField, Heading} from '@qiwi/pijma-mobile'

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
                text="Open Modal"
                onClick={() => this.setState({show: !this.state.show})}
              />
            </Actions>
            <SimpleModal
              show={this.state.show}
              closable={this.state.features.includes('closable')}
              escapeClose={this.state.features.includes('escapeClose')}
              backdropClose={this.state.features.includes('backdropClose')}
              onHide={() => this.setState({show: false})}
              children={(
                <Fragment>
                  <Heading size="1" tag="h2">Modal</Heading>
                  <br/>
                  <br/>
                  <Actions>
                    <Button
                      kind="brand"
                      type="button"
                      text="Close Modal"
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

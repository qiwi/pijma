import React, {Component, Fragment} from 'react'

import {DropUp, Actions, Button} from '@qiwi/pijma-mobile'

interface State {
  show: boolean
}

export default class DropUpExample extends Component<{}, State> {

  public state: State = {
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
              <DropUp
                show={this.state.show}
                onHide={() => this.setState({show: false})}
                children={(
                  <Fragment>
                    <strong>DropUp</strong>
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
        </tbody>
      </table>
    )
  }

}

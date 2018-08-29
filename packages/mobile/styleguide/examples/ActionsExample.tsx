import React, {Component} from 'react'

import {Actions, Button} from '@qiwi/pijma-mobile'

interface State {
  features: string[]
}

export default class ActionsExample extends Component<{}, State> {

  public state: State = {
    features: [],
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px', verticalAlign: 'top', width: '50%'}}>
            <Actions>
              <Button
                type="button"
                kind="brand"
                text="Оплатить"
              />
              <Button
                type="button"
                kind="simple"
                text="Отменить"
              />
            </Actions>
          </td>
        </tr>
        </tbody>
      </table>
    )
  }

}

import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {Actions, Button, RadioField, CheckboxField} from '@qiwi/pijma-mobile'

interface State {
  features: string[]
  size: 'accent' | 'normal' | 'minor'
}

export default class ActionsExample extends Component<{}, State> {

  public state: State = {
    features: [],
    size: 'accent',
  }

  public render() {
    return (
      <Spacer size="m">
        <Actions size={this.state.size}>
          <Button
            type="button"
            kind="brand"
            size={this.state.size}
            text={this.state.features.includes('long') ? 'Оплатить без комиссии и без проблем' : 'Оплатить'}
          />
          <Button
            type="button"
            kind="simple"
            size={this.state.size}
            text="Отменить"
          />
        </Actions>
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
        <CheckboxField
          options={[{
            label: 'long',
            value: 'long',
          }]}
          values={this.state.features}
          onChange={(features) => this.setState({features})}
        />
      </Spacer>
    )
  }

}

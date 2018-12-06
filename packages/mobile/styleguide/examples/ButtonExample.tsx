import React, {Component} from 'react'

import {Spacer} from '@qiwi/pijma-core'
import {StarIcon} from '@qiwi/pijma-media'
import {Button, Actions, RadioField, CheckboxField} from '@qiwi/pijma-mobile'

interface State {
  features: string[]
  type: 'submit' | 'button'
  kind: 'brand' | 'simple'
  size: 'minor' | 'normal' | 'accent'
}

export default class ButtonExample extends Component<{}, State> {

  public state: State = {
    features: ['icon', 'text'],
    type: 'button',
    kind: 'brand',
    size: 'accent',
  }

  public render() {
    return (
      <Spacer size="m">
        <Actions size={this.state.size}>
          <Button
            type={this.state.type}
            disabled={this.state.features.includes('disabled')}
            loading={this.state.features.includes('loading')}
            kind={this.state.kind}
            size={this.state.size}
            icon={this.state.features.includes('icon') ? <StarIcon/> : undefined}
            text={this.state.features.includes('text') ? (this.state.features.includes('long') ? 'Оплатить без комиссии и без проблем' : 'Оплатить') : undefined}
          />
        </Actions>
        <RadioField
          title="kind"
          options={[{
            label: 'brand',
            value: 'brand',
          }, {
            label: 'simple',
            value: 'simple',
          }]}
          value={this.state.kind}
          onChange={(kind) => this.setState({kind})}
        />
        <RadioField
          title="size"
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
          title="features"
          options={[{
            label: 'disabled',
            value: 'disabled',
          }, {
            label: 'loading',
            value: 'loading',
          }, {
            label: 'icon',
            value: 'icon',
          }, {
            label: 'text',
            value: 'text',
          }, {
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

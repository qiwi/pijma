import React from 'react'

import DropControlProps from './DropControlProps'

export default class DropControl extends React.Component<DropControlProps> {

  public render() {
    return this.props.children({
      onHide: this.props.onHide,
    })
  }

}

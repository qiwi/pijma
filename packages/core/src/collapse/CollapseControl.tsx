import React from 'react'

import CollapseControlProps from './CollapseControlProps'
import CollapseControlState from './CollapseControlState'

export default class ButtonControl extends React.Component<CollapseControlProps, CollapseControlState> {

  public state: CollapseControlState = {
    transitionEnded: true,
    expanded: false,
  }

  private onClick: React.MouseEventHandler = () => {
    this.setState({
      transitionEnded: false,
      expanded: !this.state.expanded,
    })
  }

  private onTransitionEnd: React.TransitionEventHandler = () => {
    this.setState({
      ...this.state,
      transitionEnded: true,
    })
  }

  public render() {
    return this.props.children({
      transitionEnded: this.state.transitionEnded,
      expanded: this.state.expanded,
      onClick: this.onClick,
      onTransitionEnd: this.onTransitionEnd,
    })
  }

}

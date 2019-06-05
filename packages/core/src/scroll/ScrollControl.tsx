import React from 'react'

import RenderChild from '../RenderChild'

export interface ScrollControlProps {
  children: RenderChild<{
    onScrollStart: () => void
    onScrollReset: () => void
    scrolled: boolean
  }>
}

export interface ScrollControlState {
  scrolled: boolean
}

export class ScrollControl extends React.Component<ScrollControlProps, ScrollControlState> {

  public static defaultProps: Partial<ScrollControlProps> = {}

  public state: ScrollControlState = {
    scrolled: false,
  }

  private onScrollStart: () => void = () => {
    this.setState({
      scrolled: true,
    })
  }

  private onScrollReset: () => void = () => {
    this.setState({
      scrolled: false,
    })
  }

  public render() {
    return this.props.children({
      scrolled: this.state.scrolled,
      onScrollStart: this.onScrollStart,
      onScrollReset: this.onScrollReset,
    })
  }

}

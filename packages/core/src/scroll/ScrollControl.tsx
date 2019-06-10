import React, {RefObject, Component, createRef, ReactNode} from 'react'
import {Waypoint} from '../waypoint'

import RenderChild from '../RenderChild'

export interface ScrollControlProps {
  children: RenderChild<{
    scrolled: boolean
    ref: RefObject<HTMLDivElement>
    waypoint: ReactNode
  }>
}

export interface ScrollControlState {
  scrolled: boolean
}

export class ScrollControl extends Component<ScrollControlProps, ScrollControlState> {

  public static defaultProps: Partial<ScrollControlProps> = {}

  public state: ScrollControlState = {
    scrolled: false,
  }

  private ref: RefObject<HTMLDivElement> = createRef()

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

  private waypoint: ReactNode = (
    <Waypoint
      scrollableAncestor={this.ref.current}
      topOffset={-8}
      onEnter={this.onScrollReset}
      onLeave={this.onScrollStart}
    />
  )

  public render() {
    return this.props.children({
      scrolled: this.state.scrolled,
      ref: this.ref,
      waypoint: this.waypoint,
    })
  }

}

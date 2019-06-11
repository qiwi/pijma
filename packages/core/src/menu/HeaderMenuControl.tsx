import React, {RefObject, Component, createRef, ReactNode} from 'react'
import {Waypoint} from '../waypoint'
import RenderChild from '../RenderChild'

export interface HeaderMenuControlProps {
  scrollContent: ReactNode
  children: RenderChild<{
    scrolled: boolean
    ref: RefObject<HTMLDivElement>
    waypoint: ReactNode
  }>
}

export interface HeaderMenuControlState {
  scrolled: boolean
}

export class HeaderMenuControl extends Component<HeaderMenuControlProps, HeaderMenuControlState> {

  public static defaultProps: Partial<HeaderMenuControlProps> = {}

  public state: HeaderMenuControlState = {
    scrolled: false,
  }

  private ref: RefObject<HTMLDivElement> = createRef()

  private onScrollLeave: () => void = () => {
    this.setState({
      scrolled: true,
    })
  }

  private onScrollEnter: () => void = () => {
    this.setState({
      scrolled: false,
    })
  }

  private waypoint: ReactNode = (
    <Waypoint
      scrollableAncestor={this.ref.current}
      topOffset={-8}
      onEnter={this.onScrollEnter}
      onLeave={this.onScrollLeave}
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

import React, {RefObject, Component, createRef, ReactNode} from 'react'
import {Waypoint} from '../waypoint'
import RenderChild from '../RenderChild'

export interface OffsetScrollControlProps {
  content: ReactNode
  top: string | number
  bottom: string | number
  children: RenderChild<{
    top: boolean
    bottom: boolean
    children: ReactNode
  }>
}

export interface OffsetScrollControlState {
  top: boolean
  bottom: boolean
}

export class OffsetScrollControl extends Component<OffsetScrollControlProps, OffsetScrollControlState> {

  public state: OffsetScrollControlState = {
    top: false,
    bottom: false,
  }

  private ref: RefObject<HTMLDivElement> = createRef()

  private onTopLeave: () => void = () => {
    this.setState({
      top: true,
    })
  }

  private onTopEnter: () => void = () => {
    this.setState({
      top: false,
    })
  }

  private onBottomLeave: () => void = () => {
    this.setState({
      bottom: true,
    })
  }

  private onBottomEnter: () => void = () => {
    this.setState({
      bottom: false,
    })
  }

  private children: ReactNode = (
    <div ref={this.ref}>
      <Waypoint
        scrollableAncestor={this.ref.current}
        topOffset={this.props.top}
        onEnter={this.onTopEnter}
        onLeave={this.onTopLeave}
      />
      {this.props.content}
      <Waypoint
        scrollableAncestor={this.ref.current}
        topOffset={this.props.bottom}
        onEnter={this.onBottomEnter}
        onLeave={this.onBottomLeave}
      />
    </div>
  )

  public render() {
    return this.props.children({
      top: this.state.top,
      bottom: this.state.bottom,
      children: this.children,
    })
  }

}

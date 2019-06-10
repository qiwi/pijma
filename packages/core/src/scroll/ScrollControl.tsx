import React, {RefObject, Component, createRef, FC} from 'react'
import {Card, CardProps} from '../primitive'
import {Waypoint} from '../waypoint'

import RenderChild from '../RenderChild'

export interface ScrollControlProps {
  children: RenderChild<{
    scrolled: boolean
    scrollableCard: FC<CardProps>
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

  private scrollableCard: FC<CardProps> = (props) => (
    <Card ref={this.ref} {...props}>
      <Waypoint
        scrollableAncestor={this.ref.current}
        topOffset={-8}
        onEnter={this.onScrollReset}
        onLeave={this.onScrollStart}
      />
      {props.children}
    </Card>
  )

  public render() {
    return this.props.children({
      scrolled: this.state.scrolled,
      scrollableCard: this.scrollableCard,
    })
  }

}

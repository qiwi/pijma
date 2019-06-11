import React, {RefObject, Component, createRef, ReactNode} from 'react'
import {Waypoint} from '../waypoint'
import {Box} from '../primitive'

import RenderChild from '../RenderChild'

export interface ScrollControlProps {
  scrollContent: ReactNode
  children: RenderChild<{
    scrolled: boolean
    scrollContent: ReactNode
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

  public render() {
    return this.props.children({
      scrolled: this.state.scrolled,
      scrollContent: (
        <Box ref={this.ref}>
          <Waypoint
            scrollableAncestor={this.ref.current}
            topOffset={-8}
            onEnter={this.onScrollReset}
            onLeave={this.onScrollStart}
          />
          {this.props.scrollContent}
        </Box>
      ),
    })
  }

}

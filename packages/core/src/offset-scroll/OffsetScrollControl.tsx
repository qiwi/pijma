import React, {RefObject, Component, createRef, ReactNode, FC} from 'react'
import {InView} from '../inview'
import {Box} from '../primitive'

export interface OffsetScrollControlProps {
  content: ReactNode
  top?: string
  bottom?: string
  children: FC<{
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

  public render() {
    return this.props.children({
      top: this.state.top,
      bottom: this.state.bottom,
      children: (
        <Box height={1} overflow="auto" ref={this.ref}>
          <InView
            root={this.ref.current}
            rootMargin={`${this.props.top || '0px'} 0px 0px 0px`}
            onChange={(inView) => inView ? this.onTopEnter() : this.onTopLeave()}
            children={({ref}) => (<div ref={ref}/>)}
          />
          {this.props.content}
          <InView
            root={this.ref.current}
            rootMargin={`0px 0px ${this.props.bottom || '0px'} 0px`}
            onChange={(inView) => inView ? this.onBottomEnter() : this.onBottomLeave()}
            children={({ref}) => (<div ref={ref}/>)}
          />
        </Box>
      ),
    })
  }

}

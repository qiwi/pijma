import { Component, FC, FocusEventHandler, MouseEventHandler } from 'react'

export interface LinkControlProps {
  onClick?: (
    href?: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
  ) => boolean | void
  onFocus?: () => void
  onBlur?: () => void
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  children: FC<{
    active: boolean
    focus: boolean
    hover: boolean
    onClick: MouseEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onMouseEnter: MouseEventHandler
    onMouseLeave: MouseEventHandler
    onMouseUp: MouseEventHandler
    onMouseDown: MouseEventHandler
  }>
}

export interface LinkControlState {
  active: boolean
  focus: boolean
  hover: boolean
}

export class LinkControl extends Component<LinkControlProps, LinkControlState> {
  public static displayName = 'LinkControl'

  public static defaultProps: Partial<LinkControlProps> = {}

  public state: LinkControlState = {
    active: false,
    focus: false,
    hover: false,
  }

  private onMouseEnter: MouseEventHandler = () => {
    this.setState({
      hover: true,
    })
  }

  private onMouseLeave: MouseEventHandler = () => {
    this.setState({
      hover: false,
    })
  }

  private onMouseUp: MouseEventHandler = () => {
    this.setState({
      active: false,
    })
  }

  private onMouseDown: MouseEventHandler = () => {
    this.setState({
      active: true,
    })
  }

  private onClick: MouseEventHandler = (e) => {
    e.preventDefault()
    if (this.props.onClick) {
      const res = this.props.onClick(
        this.props.href,
        this.props.target,
        this.props.download,
        this.props.rel,
      )
      if (res !== true) {
        e.stopPropagation()
      }
    } else {
      e.stopPropagation()
    }
  }

  private onFocus: FocusEventHandler = (e) => {
    this.setState({
      focus: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: FocusEventHandler = (e) => {
    this.setState({
      focus: false,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  public render() {
    return this.props.children({
      active: this.state.active,
      focus: this.state.focus,
      hover: this.state.hover,
      onClick: this.onClick,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onMouseUp: this.onMouseUp,
      onMouseDown: this.onMouseDown,
    })
  }
}

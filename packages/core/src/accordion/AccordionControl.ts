import {
  Component,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

export interface AccordionControlProps<I> {
  items: I[]
  opened: number[]
  onChange: (opened: number[]) => void
  children: FC<{
    onKeyDown: KeyboardEventHandler
    items: Array<
      I & {
        opened: boolean
        hovered: boolean
        focused: boolean
        onClick: MouseEventHandler
        onMouseEnter: MouseEventHandler
        onMouseLeave: MouseEventHandler
        onFocus: FocusEventHandler
        onBlur: FocusEventHandler
      }
    >
  }>
}

export interface AccordionControlState {
  hovered: number
  focused: number
}

export class AccordionControl<I> extends Component<
  AccordionControlProps<I>,
  AccordionControlState
> {
  public static displayName = 'AccordionControl'

  public state: AccordionControlState = {
    hovered: -1,
    focused: -1,
  }

  private onFocus: (index: number) => FocusEventHandler = (index) => () => {
    this.setState({
      focused: index,
    })
  }

  private onBlur: FocusEventHandler = () => {
    this.setState({
      focused: -1,
    })
  }

  private onChange: (index: number) => void = (index) => {
    const { opened } = this.props
    this.props.onChange(
      opened.includes(index)
        ? opened.filter((i) => i !== index)
        : opened.concat(index),
    )
  }

  private onItemClick: (index: number) => MouseEventHandler =
    (index) => (event) => {
      event.preventDefault()
      this.onChange(index)
    }

  private onItemMouseEnter: (index: number) => MouseEventHandler =
    (index) => () => {
      this.setState({
        hovered: index,
      })
    }

  private onItemMouseLeave: MouseEventHandler = () => {
    this.setState({
      hovered: -1,
    })
  }

  private onKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused !== -1) {
          this.onChange(this.state.focused)
        }
        break
    }
  }

  public render() {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      items: this.props.items.map((item, index) => ({
        ...item,
        opened: this.props.opened.includes(index),
        hovered: index === this.state.hovered,
        focused: index === this.state.focused,
        onClick: this.onItemClick(index),
        onMouseEnter: this.onItemMouseEnter(index),
        onMouseLeave: this.onItemMouseLeave,
        onFocus: this.onFocus(index),
        onBlur: this.onBlur,
      })),
    })
  }
}

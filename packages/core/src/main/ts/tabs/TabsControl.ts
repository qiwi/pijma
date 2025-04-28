import {
  Component,
  createRef,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react'
export interface TabsControlProps {
  select: number
  length: number
  onChange?: (selected: number) => void
  children: FC<{
    onKeyDown: KeyboardEventHandler
    borderLeft: number
    borderWidth: number
    items: Array<{
      select: boolean
      focus: boolean
      ref: RefObject<HTMLDivElement>
      onMouseEnter: MouseEventHandler
      onMouseLeave: MouseEventHandler
      onFocus: FocusEventHandler
      onBlur: FocusEventHandler
      onClick: MouseEventHandler
    }>
  }>
}

export interface TabsControlState {
  focused: number
  borderLeft: number
  borderWidth: number
  refs: RefObject<HTMLDivElement>[]
}

export class TabsControl extends Component<TabsControlProps> {
  public static displayName = 'TabsControl'

  public state: TabsControlState = {
    focused: -1,
    borderLeft: 0,
    borderWidth: 0,
    refs: new Array(this.props.length).fill(1).map(() => createRef()),
  }

  private calculateBorder() {
    const element = this.state.refs[this.props.select].current
    if (!element) {
      return
    }
    this.setState({
      borderLeft: element.offsetLeft,
      borderWidth: element.offsetWidth,
    })
  }

  public static getDerivedStateFromProps(
    nextProps: TabsControlProps,
  ): Partial<TabsControlState> {
    const { length } = nextProps
    return {
      refs: new Array(length).fill(1).map(() => createRef<HTMLDivElement>()),
    }
  }

  public componentDidMount() {
    this.calculateBorder()
  }

  public componentDidUpdate(props: TabsControlProps) {
    if (props.select !== this.props.select) {
      this.calculateBorder()
    }
  }

  private onItemFocus: (index: number) => FocusEventHandler =
    (index) => (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.setState({
        focused: index,
      })
    }

  private onItemBlur: FocusEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      focused: -1,
    })
  }

  private onItemMouseEnter: (index: number) => MouseEventHandler =
    (index) => (event) => {
      event.preventDefault()
      this.setState({
        focused: index,
      })
    }

  private onItemMouseLeave: MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focused: -1,
    })
  }

  private onItemClick: (select: number) => MouseEventHandler =
    (select) => (event) => {
      event.preventDefault()
      if (this.props.onChange) {
        this.props.onChange(select)
      }
    }

  private onKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused !== -1 && this.props.onChange) {
          this.props.onChange(this.state.focused)
        }
        break
    }
  }

  public render() {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      borderLeft: this.state.borderLeft,
      borderWidth: this.state.borderWidth,
      items: new Array(this.props.length).fill(0).map((_item, index) => ({
        select: index === this.props.select,
        focus: index === this.state.focused,
        ref: this.state.refs[index],
        onFocus: this.onItemFocus(index),
        onBlur: this.onItemBlur,
        onMouseEnter: this.onItemMouseEnter(index),
        onMouseLeave: this.onItemMouseLeave,
        onClick: this.onItemClick(index),
      })),
    })
  }
}

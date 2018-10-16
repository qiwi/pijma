import React, {RefObject} from 'react'

import MenuControlProps from './MenuControlProps'
import MenuControlState from './MenuControlState'

export default class MenuControl<V> extends React.PureComponent<MenuControlProps<V>, MenuControlState> {

  private contentRef: RefObject<HTMLElement> = React.createRef()

  private optionsRefs: RefObject<HTMLElement>[] = this.props.options.map(() => React.createRef())

  public state: MenuControlState = {
    scrollable: false,
  }

  public componentDidMount() {
    this.update(this.props.selected)
  }

  public componentWillReceiveProps(props: MenuControlProps<V>) {
    this.update(props.focused)
  }

  private update(index: number | undefined) {
    const contentNode = this.contentRef.current
    if (contentNode === null) {
      return
    }
    this.setState({
      scrollable: contentNode.scrollHeight > contentNode.offsetHeight,
    })
    if (index === undefined || index < 0) {
      return
    }
    const optionNode = this.optionsRefs[index].current
    if (optionNode === null) {
      return
    }
    const optionRect = optionNode.getBoundingClientRect()
    const contentRect = contentNode.getBoundingClientRect()
    if (optionRect.bottom <= contentRect.bottom && optionRect.top >= contentRect.top) {
      return
    }
    const scrollTop = optionNode.offsetTop + optionNode.clientHeight - contentNode.offsetHeight
    contentNode.scrollTop = scrollTop > 0 ? scrollTop : optionNode.offsetTop
  }

  public render() {
    return this.props.children({
      ref: this.contentRef,
      scrollable: this.state.scrollable,
      options: this.props.options.map((option, index) => Object.assign({}, option, {
        ref: this.optionsRefs[index],
      })),
    })
    /*
    return (
      <div className={classNames({
        [classes.self]: true,
        [classes.scrollable]: scrollable,
      })}>
        <div className={classes.content} ref="content">
          {options.map(this.renderOption)}
        </div>
      </div>
    )
    */
  }

}

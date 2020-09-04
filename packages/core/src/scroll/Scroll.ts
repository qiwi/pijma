import React, {Component, RefObject} from 'react'

import RenderChild from '../RenderChild'

interface ScrollProps {
  scroll: boolean
  children: RenderChild<{
    ref: RefObject<HTMLElement>
  }>
}

export class Scroll extends Component<ScrollProps> {

  private childrenRef: RefObject<HTMLElement>

  constructor(props: ScrollProps) {
    super(props)
    this.childrenRef = React.createRef()
  }

  public componentDidMount() {
    if (this.props.scroll) {
      this.scrollIntoView()
    }
  }

  public componentDidUpdate() {
    if (this.props.scroll) {
      this.scrollIntoView()
    }
  }

  private isElementInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  private scrollIntoView() {
    const element = this.childrenRef.current
    if (element) {
      if (!this.isElementInViewport(element)) {
        element.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        })
      }
      const focusableElement = element.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )[0]
      if (focusableElement) {
        focusableElement.focus({
          preventScroll: true,
        })
      }
    }
  }

  public render() {
    return this.props.children({
      ref: this.childrenRef,
    })
  }

}

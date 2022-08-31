import { Component, createRef, FC, MouseEventHandler, RefObject } from 'react'

export interface HintControlProps {
  show: boolean
  onShow: () => void
  children: FC<{
    show: boolean
    onClick: MouseEventHandler
    target: RefObject<HTMLDivElement>
    container: RefObject<HTMLDivElement>
  }>
}

export class HintControl extends Component<HintControlProps> {
  private target: RefObject<HTMLDivElement> = createRef()

  private container: RefObject<HTMLDivElement> = createRef()

  private onClick: MouseEventHandler = (event) => {
    event.preventDefault()
    this.props.onShow()
  }

  public render() {
    return this.props.children({
      show: this.props.show,
      onClick: this.onClick,
      target: this.target,
      container: this.container,
    })
  }
}

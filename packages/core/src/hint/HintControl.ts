import { Component, createRef, FC, MouseEventHandler, RefObject } from 'react'

export interface HintControlProps {
  show: boolean
  onShow: () => void
  children: FC<{
    onClick: MouseEventHandler
    show: boolean
    target: RefObject<HTMLDivElement>
    container: RefObject<HTMLDivElement>
  }>
}

export class HintControl extends Component<HintControlProps> {
  private target: RefObject<HTMLDivElement> = createRef()

  private container: RefObject<HTMLDivElement> = createRef()

  private onItemClick: (show: boolean) => MouseEventHandler = () => (event) => {
    event.preventDefault()
    this.props.onShow()
  }

  public render() {
    return this.props.children({
      show: this.props.show,
      onClick: this.onItemClick(this.props.show),
      target: this.target,
      container: this.container,
    })
  }
}

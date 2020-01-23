import React, {createRef, RefObject} from 'react'
import RenderChild from '../RenderChild'

export interface HintControlProps {
  show: boolean
  onShow: () => void
  children: RenderChild<{
    onClick: React.MouseEventHandler
    show: boolean
    target: RefObject<HTMLDivElement>
    container: RefObject<HTMLDivElement>
  }>
}

export class HintControl extends React.Component<HintControlProps> {

  private target: RefObject<HTMLDivElement> = createRef()

  private container: RefObject<HTMLDivElement> = createRef()

  private onItemClick: (show: boolean) => React.MouseEventHandler = () => (event) => {
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

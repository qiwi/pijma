import React from 'react'
import RenderChild from '../RenderChild'

export interface PageControlProps {
  pageNumber: number
  onClick?: (pageNumber: number) => void
  onMouseEnter: (id: string) => void
  disabled?: boolean
  hovered?: string
  id: string
  children: RenderChild<{
    onClick: React.MouseEventHandler
    disabled: boolean
    hovered: boolean
    onMouseEnter: () => void
  }>
}

export class PageControl extends React.Component<PageControlProps> {

  private onClick: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    if (this.props.onClick && !this.props.disabled) {
      this.props.onClick(this.props.pageNumber)
    }
  }

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.id)
  }

  public render() {
    return this.props.children({
      onClick: this.onClick,
      disabled: this.props.disabled || false,
      hovered: this.props.hovered === this.props.id,
      onMouseEnter: this.onMouseEnter,
    })
  }

}

import React from 'react'
import RenderChild from '../RenderChild'

export interface PaginationControlProps {
  total: number
  active: number
  count: number
  children: RenderChild<{
    hasPreviousPage: boolean
    previousPage: number
    hasNextPage: boolean
    nextPage: number
    pages: number[]
    currentPage: number
    totalPages: number
    onMouseEnter: (id: string) => void
    onMouseLeave: () => void
    hovered: string
  }>
}

export interface PaginationControlState {
  hovered: string
}

export class PaginationControl extends React.Component<PaginationControlProps, PaginationControlState> {

  public state: PaginationControlState = {
    hovered: '',
  }
  private onPageMouseEnter = (id: string) => {
    this.setState({
      hovered: id,
    })
  }
  private onPageMouseLeave = () => {
    this.setState({
      hovered: '',
    })
  }
  private buildPages = () => {
    const {total, count, active} = this.props
    const totalPages = Math.max(Math.ceil(total), 1)
    const length = Math.max(Math.ceil(count), 1)
    const currentPage = Math.min(Math.max(Math.ceil(active), 1), totalPages)

    let firstPage = Math.max(1, currentPage - Math.floor(length / 2))
    let lastPage = Math.min(totalPages, currentPage + Math.floor(length / 2))

    if (lastPage - firstPage + 1 < length) {
      if (currentPage < totalPages / 2) {
        lastPage = Math.min(
          totalPages,
          lastPage + (length - (lastPage - firstPage)),
        )
      }
      else {
        firstPage = Math.max(1, firstPage - (length - (lastPage - firstPage)))
      }
    }
    if (lastPage - firstPage + 1 > length) {
      if (currentPage > totalPages / 2) {
        firstPage++
      }
      else {
        lastPage--
      }
    }

    return {
      hasPreviousPage: currentPage > 1,
      previousPage: currentPage - 1,
      hasNextPage: currentPage < totalPages,
      nextPage: currentPage + 1,
      currentPage,
      totalPages,
      pages: new Array(lastPage - firstPage + 1)
        .fill(0)
        .map((_, i) => firstPage + i),
      onMouseEnter: this.onPageMouseEnter,
      onMouseLeave: this.onPageMouseLeave,
      hovered: this.state.hovered,
    }
  }
  public render() {
    return this.props.children(this.buildPages())
  }

}

import React from 'react'
import RenderChild from '../RenderChild'

export interface PaginationControlProps {
  total: number
  active: number
  count: number
  children: RenderChild<{
    previousPage: number
    nextPage: number
    pages: number[]
    currentPage: number
    totalPages: number
  }>
}

export class PaginationControl extends React.Component<PaginationControlProps> {

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
      previousPage: currentPage - 1,
      nextPage: currentPage + 1,
      currentPage,
      totalPages,
      pages: new Array(lastPage - firstPage + 1)
        .fill(0)
        .map((_, i) => firstPage + i),
    }
  }
  public render() {
    return this.props.children(this.buildPages())
  }

}

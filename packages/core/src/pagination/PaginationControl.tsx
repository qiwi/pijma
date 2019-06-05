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
    const visiblePages = Math.max(Math.ceil(count), 1)
    const currentPage = Math.min(Math.max(Math.ceil(active), 1), totalPages)

    const firstPage = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(visiblePages / 2),
        totalPages - visiblePages + 1,
      ),
    )

    return {
      previousPage: currentPage - 1,
      nextPage: currentPage + 1,
      currentPage,
      totalPages,
      pages: new Array(Math.min(visiblePages, totalPages))
        .fill(0)
        .map((_, i) => firstPage + i),
    }
  }
  public render() {
    const {total, count, active} = this.props
    const isValidProps: boolean = active <= total && count <= total

    return isValidProps ? this.props.children(this.buildPages()) : null
  }

}

import React from 'react'
import RenderChild from '../RenderChild'

export interface PaginationControlProps {
  total: number
  active: number
  count: number
  href?: (page: number) => string
  onChange?: (index: number) => void
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  children: RenderChild<{
    previousPage: number
    nextPage: number
    pages: number[]
    currentPage: number
    totalPages: number
    onPageClick?: (page: number, disabled: boolean) => void
  }>
}

export class PaginationControl extends React.Component<PaginationControlProps> {

  private buildPages = () => {
    const {total, count, active, href, onChange, onClick} = this.props
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
      onPageClick: (page: number, disabled: boolean) => href
        ? onClick
        : !disabled && onChange && onChange(page),
    }
  }
  public render() {
    const {total, count, active} = this.props
    const isValidProps: boolean = active <= total && count <= total

    return isValidProps ? this.props.children(this.buildPages()) : null
  }

}

import React, {FC} from 'react'

export interface PaginationControlProps {
  total: number
  active: number
  count: number
  href?: (page: number) => string
  onChange?: (index: number) => void
  children: FC<{
    prev: number
    next: number
    pages: number[]
    active: number
    total: number
    onPageClick: (page: number, disabled: boolean) => ((href?: string, target?: string, download?: string | boolean, rel?: string) => void) | undefined
  }>
}

export class PaginationControl extends React.Component<PaginationControlProps> {

  private onPageClick = (page: number, disabled: boolean) => {
    if (this.props.href || disabled) {
      return undefined
    }
    return this.onPageChange(page)
  }

  private onPageChange = (page: number) => () => {
    if (this.props.onChange) {
      this.props.onChange(page)
    }
  }

  public render() {
    const {total, count, active} = this.props
    const isValidProps: boolean = active <= total && count <= total

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

    if (!isValidProps) {
      return null
    }

    return this.props.children({
      prev: currentPage - 1,
      next: currentPage + 1,
      active: currentPage,
      total: totalPages,
      pages: new Array(Math.min(visiblePages, totalPages))
        .fill(0)
        .map((_, i) => firstPage + i),
      onPageClick: this.onPageClick,
    })
  }

}

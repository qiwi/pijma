import { Pagination } from '@qiwi/pijma-desktop'
import React, { Component } from 'react'

import PaginatorProps from './PaginatorProps'

export class Paginator extends Component<PaginatorProps> {
  onChangePage(page: any) {
    if (!this.props.onChange) {
      return
    }
    this.props.onChange(page)
  }

  render() {
    const { activePage, totalItemsCount, itemsCountPerPage, paginatorProps } =
      this.props
    const isPaginatorHidden = totalItemsCount <= itemsCountPerPage

    if (isPaginatorHidden) {
      return null
    }

    return (
      <Pagination
        active={activePage}
        count={itemsCountPerPage}
        total={totalItemsCount}
        onChange={this.onChangePage.bind(this)}
        {...paginatorProps}
      />
    )
  }
}

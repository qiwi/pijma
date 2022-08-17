import { Icon, styled } from '@qiwi/pijma-core'
import React, { Component } from 'react'
import Pagination from 'react-js-pagination'

import { COLOR } from '../theme'
import PaginatorProps from './PaginatorProps'

export const IconWrapper = styled('div')<{ color: string | undefined }>`
  width: 24px;
  height: 24px;
  float: right;
  border: none;
  display: inline-block;
  fill: ${(props) => props.color || COLOR.TEXT.Primary};
`

export const Wrapper = styled('div')<{
  isNavigationHidden: boolean
  padding: number | undefined
  isFirstLastNavigationHidden: boolean
}>`
  ul.pagination {
    display: inline-flex;
    background: ${COLOR.BACKGROUND.Primary};
    border-radius: 8px;
    box-shadow: 0 1px 3px ${COLOR.BACKGROUND.Shadow};

    li {
      display: flex;
      align-items: center;
      padding: ${(props: any) => props.padding || 20}px;
      cursor: pointer;

      a {
        display: inline-block;
        min-width: 24px;
        text-align: center;
        color: ${COLOR.TEXT.Primary};
        margin: 0 auto;
      }
    }

    li.active a {
      color: ${COLOR.BRAND.Primary};
      text-align: center;
    }

    li:not(:last-child) {
      border-right: 1px solid #e6e6e6;
    }

    ${(props) =>
      props.isFirstLastNavigationHidden
        ? ''
        : 'li:first-child, li:last-child { width: 72px }'}
`

export class Paginator extends Component<PaginatorProps> {
  onChangePage(page: any) {
    if (!this.props.onChange) {
      return
    }
    this.props.onChange(page)
  }

  resolveNavigaterItemColor(
    direction: string,
    {
      activePage,
      itemsCountPerPage,
      totalItemsCount,
    }: {
      activePage: number
      itemsCountPerPage: number
      totalItemsCount: number
    },
  ) {
    if (direction === 'forward') {
      if (activePage === 1) {
        return COLOR.TEXT.Secondary3
      }
    } else {
      if (activePage === Math.ceil(totalItemsCount / itemsCountPerPage)) {
        return COLOR.TEXT.Secondary3
      }
    }
  }

  render() {
    const {
      activePage,
      totalItemsCount,
      pageRangeDisplayed,
      itemsCountPerPage,
      padding,
      hideFirstLastPages,
      paginatorProps,
    } = this.props
    const nextPageColor = this.resolveNavigaterItemColor('backward', this.props)
    const prevPageColor = this.resolveNavigaterItemColor('forward', this.props)
    const isNavigationHidden =
      Math.ceil(totalItemsCount / itemsCountPerPage) <= pageRangeDisplayed
    const isFirstLastNavigationHidden =
      hideFirstLastPages ||
      Math.ceil(totalItemsCount / itemsCountPerPage) <= pageRangeDisplayed
    const isPaginatorHidden = totalItemsCount <= itemsCountPerPage

    if (isPaginatorHidden) {
      return null
    }

    return (
      <Wrapper
        isNavigationHidden={isNavigationHidden}
        padding={padding}
        isFirstLastNavigationHidden={isFirstLastNavigationHidden}
      >
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          hideNavigation={isNavigationHidden}
          hideFirstLastPages={isFirstLastNavigationHidden}
          onChange={this.onChangePage.bind(this)}
          firstPageText={
            <IconWrapper color={prevPageColor}>
              <Icon name="angle-double-left" />
            </IconWrapper>
          }
          lastPageText={
            <IconWrapper color={nextPageColor}>
              <Icon name="angle-double-right" />
            </IconWrapper>
          }
          prevPageText={
            <IconWrapper color={prevPageColor}>
              <Icon name="angle-left" />
            </IconWrapper>
          }
          nextPageText={
            <IconWrapper color={nextPageColor}>
              <Icon name="angle-right" />
            </IconWrapper>
          }
          {...paginatorProps}
        />
      </Wrapper>
    )
  }
}

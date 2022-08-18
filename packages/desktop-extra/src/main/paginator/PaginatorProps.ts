export default interface PaginatorProps {
  onChange?: (value?: any) => void
  activePage: number
  totalItemsCount: number
  pageRangeDisplayed: number
  itemsCountPerPage: number
  padding?: number
  hideFirstLastPages?: boolean
  paginatorProps?: object
}

import { Icon, Spacer, TextField } from '@qiwi/pijma-mobile'
import React, { FC, ReactNode } from 'react'

interface TableOfContentsRendererProps {
  searchTerm: string
  onSearchTermChange: (value: string) => void
  children?: ReactNode
}

const TableOfContentsRenderer: FC<TableOfContentsRendererProps> = (props) => (
  <Spacer>
    <TextField
      value={props.searchTerm}
      placeholder="Поиск"
      hint={<Icon name="search" color="#666" />}
      onChange={props.onSearchTermChange}
    />
    {props.children}
  </Spacer>
)

export default TableOfContentsRenderer

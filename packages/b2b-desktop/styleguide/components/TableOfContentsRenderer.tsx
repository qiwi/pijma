import { Icon, Spacer } from '@qiwi/pijma-core'
import { TextField } from '@qiwi/pijma-desktop'
import React, { FC, ReactNode } from 'react'

interface TableOfContentsRendererProps {
  searchTerm: string
  onSearchTermChange: (value: string) => void
  children?: ReactNode
}

const TableOfContentsRenderer: FC<TableOfContentsRendererProps> = (props) => (
  <Spacer size="m">
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

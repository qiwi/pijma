import React, {FC} from 'react'

import {Spacer, Icon} from '@qiwi/pijma-core'
import {TextField} from '@qiwi/pijma-desktop'

interface TableOfContentsRendererProps {
  searchTerm: string
  onSearchTermChange: (value: string) => void
}

const TableOfContentsRenderer: FC<TableOfContentsRendererProps> = (props) => (
  <Spacer size="m">
    <TextField
      value={props.searchTerm}
      placeholder="Поиск"
      hint={<Icon name="search" color="#666"/>}
      onChange={props.onSearchTermChange}
    />
    {props.children}
  </Spacer>
)

export default TableOfContentsRenderer

import React, {FC} from 'react'

import {Spacer, Icon, IconWrapper} from '@qiwi/pijma-core'
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
      hint={<IconWrapper color="#666"><Icon name="search"/></IconWrapper>}
      onChange={props.onSearchTermChange}
    />
    {props.children}
  </Spacer>
)

export default TableOfContentsRenderer

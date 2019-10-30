import React, {FC} from 'react'

import {Thead, Tbody} from '@qiwi/pijma-core'

export interface TableProps {
  data: [][]
  titles: Array<{title: string; id: string}>
}

export const Table: FC<TableProps> = ({titles, data}) => (
  <table>
    <Thead titles={titles} />
    <Tbody data={data} />
  </table>
)

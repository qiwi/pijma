import React, {FC} from 'react'

import {Thead, TbodyProps, Tbody, Block, Card} from '@qiwi/pijma-core'

export interface TableProps extends TbodyProps {}

export const Table: FC<TableProps> = ({options}) => (
  <Block>
    <Card p="44px 0">
      <table style={{width: '100%'}}>
        <Thead columns={options.columns} />
        <Tbody options={options} />
      </table>
    </Card>
  </Block>
)

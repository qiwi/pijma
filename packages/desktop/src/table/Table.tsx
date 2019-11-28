import React, {FC, ReactNode} from 'react'

import {Thead, TbodyProps, Tbody, Block, Card, Stub} from '@qiwi/pijma-core'

export interface TableProps extends TbodyProps {
  header?: ReactNode
  footer?: ReactNode
}

export const Table: FC<TableProps> = ({columns, data, header, footer}) => {
  const stubedCells = Array(columns.length).fill(
    <Stub width="100%" height={4} />,
  )
  const stubedRows = Array(20).fill(stubedCells)
  const stub = !(data && data.length)
  return (
    <Block>
      <Card p="44px 0 48px">
        {header ? <Card p="0 44px 20px">{header}</Card> : null}
        <table style={{width: '100%'}}>
          <Thead columns={columns} />
          <Tbody
            columns={columns}
            stub={stub}
            data={stub ? stubedRows : data}
          />
        </table>
        {footer ? <Card p="20px 44px 0">{footer}</Card> : null}
      </Card>
    </Block>
  )
}

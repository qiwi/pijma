import React, {FC, ReactNode} from 'react'

import {Thead, TbodyProps, Tbody, Block, Card} from '@qiwi/pijma-core'

export interface TableProps extends TbodyProps {
  header?: ReactNode
  footer?: ReactNode
}

export const Table: FC<TableProps> = ({options, header, footer}) => (
  <Block>
    <Card p="44px 0 48px">
      {header ? <Card p="0 44px 20px">{header}</Card> : null}
      <table style={{width: '100%'}}>
        <Thead columns={options.columns} />
        <Tbody options={options} />
      </table>
      {footer ? <Card p="20px 44px 0">{footer}</Card> : null}
    </Card>
  </Block>
)

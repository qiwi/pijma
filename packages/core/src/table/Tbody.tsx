import React, {FunctionComponent, ReactNode} from 'react'

import {Typo} from '../primitive'

import {Row} from './Row'
import {Cell} from './Cell'
import {TheadTitleProps} from './Thead'

interface TbodyCell extends TheadTitleProps {
  cell: (column: ReactNode | ReactNode[]) => ReactNode
}

interface TbodyOptions {
  columns: TbodyCell[]
  data: [][]
}

export interface TbodyProps {
  options: TbodyOptions
}

export const Tbody: FunctionComponent<TbodyProps> = ({
  options: {data, columns},
}) => (
  <tbody>
    <Row height={2} />
    {data.map((row: [], index) => {
      return (
        <Row key={`body-${index}`} hover>
          <Cell width={11} />
          {row.map((cell: ReactNode | ReactNode[], index) => {
            const align: TbodyCell['align'] = columns[index].align
              ? columns[index].align
              : 'left'
            const weight: TbodyCell['weight'] = columns[index].weight
              ? columns[index].weight
              : 300
            const color: TbodyCell['color'] = columns[index].color
              ? columns[index].color
              : '#000'

            return (
              <Cell
                key={`cell-${index}`}
                pt={2}
                pb={2}
                pl={index ? (align === 'left' ? 8 : 5) : 0}
              >
                <Typo
                  size={3.5}
                  height={4}
                  weight={weight}
                  align={align}
                  color={color}
                >
                  {columns[index].cell ? columns[index].cell(cell) : cell}
                </Typo>
              </Cell>
            )
          })}
          <Cell width={11} />
        </Row>
      )
    })}
  </tbody>
)

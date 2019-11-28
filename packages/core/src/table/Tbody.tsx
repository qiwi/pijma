import React, {FunctionComponent, ReactNode} from 'react'

import {Typo} from '../primitive'

import {Row} from './Row'
import {Cell} from './Cell'
import {TheadTitleProps} from './Thead'

interface CellContentColorProps {
  state?: 'error' | 'warning' | 'success' | 'minor' | 'main'
}

const CellContentColor: {
  [state in NonNullable<CellContentColorProps['state']>]: string
} = {
  error: '#D0021B',
  warning: '#FF8C00',
  success: '#4BBD5C',
  minor: '#666',
  main: '#000',
}

export interface TbodyCell extends TheadTitleProps {
  cell: (column: ReactNode) => ReactNode
  state?:
    | CellContentColorProps['state']
    | ((data: ReactNode) => CellContentColorProps['state'])
}

export interface TbodyProps {
  columns: TbodyCell[]
  data: Array<ReactNode[]>
  stub?: boolean
}

export const Tbody: FunctionComponent<TbodyProps> = ({data, columns, stub}) => (
  <tbody>
    <Row height={2} />
    {data
      ? data.map((row: ReactNode[], index) => {
        return (
          <Row key={`row-${index}`} hover>
            <Cell width={11} />
            {row.map((cell: ReactNode, index) => {
              const column: TbodyCell = columns[index]
              const align: TbodyCell['align'] = column.align
                ? column.align
                : index === 1
                ? 'right'
                : 'left'
              const weight: TbodyCell['weight'] = column.weight
                ? column.weight
                : 300
              const colorState:
                | CellContentColorProps['state']
                | undefined = column.state
                ? typeof column.state === 'string'
                  ? column.state
                  : column.state(cell)
                : undefined
              const color: TbodyCell['color'] = column.color
                ? column.color
                : colorState
                ? CellContentColor[colorState]
                : CellContentColor['main']
              const isInGroup =
                column.group && index && columns[index - 1].group
                  ? column.group === columns[index - 1].group
                  : false

              return (
                <Cell
                  key={`row-${index}-cell-${index}`}
                  pt={2}
                  pb={2}
                  pl={index ? (isInGroup ? 5 : 8) : 0}
                >
                  <Typo
                    size={3.5}
                    height={4}
                    weight={weight}
                    align={align}
                    color={color}
                  >
                    {!stub ? column.cell ? column.cell(cell) : cell : cell}
                  </Typo>
                </Cell>
              )
            })}
            <Cell width={11} />
          </Row>
        )
      })
      : null}
  </tbody>
)

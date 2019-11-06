import React, {FunctionComponent} from 'react'

import {Typo} from '../primitive'

import {Row} from './Row'
import {Cell} from './Cell'

export interface TbodyProps {
  data: [][]
}

export const Tbody: FunctionComponent<TbodyProps> = ({data}) => (
  <tbody>
    {data.map((row: [], index) => {
      return (
        <Row key={index}>
          {row.map((cell: string | number, index) => {
            return (
              <Cell key={index} pt={2} pb={2} pr={index < row.length - 1 ? 8 : 0}>
                <Typo
                  size={3.5}
                  height={4}
                  weight={300}
                  align="left"
                  display="inline"
                >
                  {cell}
                </Typo>
              </Cell>
            )
          })}
        </Row>
      )
    })}
  </tbody>
)

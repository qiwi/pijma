import React, {FunctionComponent} from 'react'

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
            return <Cell key={index}>{cell}</Cell>
          })}
        </Row>
      )
    })}
  </tbody>
)

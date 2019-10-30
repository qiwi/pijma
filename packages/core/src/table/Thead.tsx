import React, {FunctionComponent} from 'react'

import {Row} from './Row'
import {Cell} from './Cell'

export interface TheadProps {
  titles: Array<{title: string; id: string}>
}

export const Thead: FunctionComponent<TheadProps> = ({titles}) => (
  <thead>
    <Row>
      {titles.map(({title}, index: number) => {
        return <Cell as="th" key={index}>{title}</Cell>
      })}
    </Row>
  </thead>
)

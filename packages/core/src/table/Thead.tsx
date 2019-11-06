import React, {FunctionComponent} from 'react'
import {Typo} from '../primitive'

import {Row} from './Row'
import {Cell} from './Cell'

export interface TheadTitleProps {
  title: string
  id: string
  align?: 'right' | 'left' | 'center'
}

export interface TheadProps {
  titles: TheadTitleProps[]
}

export const Thead: FunctionComponent<TheadProps> = ({titles}) => (
  <thead>
    <Row bb="1px solid #e6e6e6">
      {titles.map(({title, align = 'left'}, index: number) => {
        return (
          <Cell as="th" pb={4} pr={index < titles.length - 1 ? 8 : 0} key={index}>
            <Typo size={3.5} height={4} weight={300} align={align} color="#666">
              {title}
            </Typo>
          </Cell>
        )
      })}
    </Row>
  </thead>
)

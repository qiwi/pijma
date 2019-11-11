import React, {FunctionComponent} from 'react'
import {Typo, TypoProps} from '../primitive'

import {Row} from './Row'
import {Cell} from './Cell'

export interface TheadTitleProps extends TypoProps {
  title: string
  id: string
  group?: string
}

export interface TheadProps {
  columns: TheadTitleProps[]
}

export const Thead: FunctionComponent<TheadProps> = ({columns}) => (
  <thead>
    <Row>
      <Cell width={11} />
      {columns.map(
        (
          {title, align = 'left'},
          index: number,
        ) => {
          return (
            <Cell
              as="th"
              bb="1px solid #e6e6e6"
              pb={4}
              pl={index ? (align === 'left' ? 8 : 5) : 0}
              key={`head-${index}`}
            >
              <Typo
                size={3.5}
                height={4}
                weight={300}
                align={align}
                color={'#666'}
              >
                {title}
              </Typo>
            </Cell>
          )
        },
      )}
      <Cell width={11} />
    </Row>
  </thead>
)

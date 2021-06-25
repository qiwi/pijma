import React, {FunctionComponent} from 'react'
import {Typo, TypoProps} from '../primitive'

import {Row} from './Row'
import {Cell} from './Cell'

export interface TheadTitleProps extends TypoProps {
  title: string
  id: string
  group?: number | string
}

export interface TheadProps {
  columns: TheadTitleProps[]
}

export const Thead: FunctionComponent<TheadProps> = ({columns}) => (
  <thead>
    <Row>
      <Cell width={11} />
      {columns.map(({title, align, group}, index: number) => {
        const isInGroup =
          group && index && columns[index - 1].group
            ? group === columns[index - 1].group
            : false
        return (
          <Cell
            as="th"
            bb="1px solid #e6e6e6"
            pb={4}
            pl={index ? (isInGroup ? 5 : 8) : 0}
            key={`head-${index}`}
          >
            <Typo
              size={3.5}
              height={4}
              weight={300}
              align={align ? align : index === 1 ? 'right' : 'left'}
              color={'#666'}
            >
              {title}
            </Typo>
          </Cell>
        )
      })}
      <Cell width={11} />
    </Row>
  </thead>
)

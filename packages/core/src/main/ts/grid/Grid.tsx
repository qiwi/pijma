import React, { Children, FC, ReactNode } from 'react'

import { Flex, FlexItem } from '../primitive'

export interface GridProps {
  gutter?: number
  columns?: number
  layout?: number | number[]
  children?: ReactNode
}

const arrSum = (arr: number[]) => arr.reduce((a: number, b: number) => a + b, 0)

export const Grid: FC<GridProps> = ({
  gutter = 20,
  columns = 12,
  layout = columns,
  children,
}) => {
  const elements: ReactNode[] = Children.toArray(children)
  const layoutArr: number[] = Array.isArray(layout) ? layout : [layout]
  const layoutSum: number = arrSum(layoutArr)

  if (elements.length === 0 || columns % layoutSum !== 0) {
    return null
  }

  const layoutLength: number = layoutArr.length
  const rowBlocksCount: number = (columns / layoutSum) * layoutLength

  return (
    <Flex wrap="wrap">
      {Children.map(elements, (child: ReactNode, index: number) => {
        const oneColumnPercent = layoutArr[index % layoutLength] / columns
        const width =
          gutter === 0
            ? `${100 * oneColumnPercent}%`
            : `calc(${100 * oneColumnPercent}% + ${
                gutter * oneColumnPercent - gutter
              }px)`

        return (
          <FlexItem
            key={index}
            width={width}
            mt={index >= rowBlocksCount ? `${gutter}px` : 0}
            ml={index % rowBlocksCount !== 0 ? `${gutter}px` : 0}
            children={child}
          />
        )
      })}
    </Flex>
  )
}

Grid.displayName = 'Grid'

Grid.defaultProps = {
  gutter: 20,
  columns: 12,
}

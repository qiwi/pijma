import React, {FC} from 'react'
import {Flex, FlexItem, Icon} from '@qiwi/pijma-core/'
import {RatingControl} from '@qiwi/pijma-core/rating/RatingControl'

export interface RatingProps {
  value: number
  size?: 's' | 'm'
  statical?: boolean
  count?: number
}

const RatingSize: {
  [size in NonNullable<RatingProps['size']>]: number
} = {
  s: 8,
  m: 14.7,
}

const RatingIndent: {
  [size in NonNullable<RatingProps['size']>]: number
} = {
  s: 0,
  m: 1,
}

export const Rating: FC<RatingProps> = ({value, size = 'm', statical = false, count = 5}) => (
  <RatingControl
    value={value}
    count={count}
    statical={statical}
    children={renderProps => (
      <Flex>
        {renderProps.items.map((item, index) => (
          value = renderProps.change,
          <FlexItem
            key={index}
            onClick={item.onClick}
            cursor={statical ? undefined : 'pointer'}
            pr={RatingIndent[size]}
            pl={RatingIndent[size]}
          >
            <Icon
              key={index}
              name="star-solid"
              size={RatingSize[size]}
              color={item.active ? '#ff8c00' : '#cccccc'}
            />
          </FlexItem>
        ))}
      </Flex>
    )}
  />
)

Rating.defaultProps = {
  size: 'm',
  statical: false,
  count: 5,
}

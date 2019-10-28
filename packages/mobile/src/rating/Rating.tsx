import React, {FC} from 'react'
import {Flex, FlexItem, Icon, RatingControl} from '@qiwi/pijma-core/'

export interface RatingProps {
  value: number
  size?: 's' | 'm'
  statical?: boolean
  count?: number
}

const RatingSize: {
  [size in NonNullable<RatingProps['size']>]: number
} = {
  s: 6,
  m: 12,
}

const RatingIndent: {
  [size in NonNullable<RatingProps['size']>]: number
} = {
  s: 1,
  m: 2.5,
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
              mr={index === (renderProps.items.length - 1) ? 0 : RatingIndent[size]}
              ml={index === 0 ? 0 : RatingIndent[size]}
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

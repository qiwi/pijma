import React, {FC} from 'react'
import {Flex, FlexItem, Icon, RatingControl} from '@qiwi/pijma-core'

export interface RatingProps {
  value: number
  size?: 's' | 'm'
  disabled?: boolean
  count?: number
  onChange: (value: number) => void
}

const RatingSize: Record<NonNullable<RatingProps['size']>, number> = {
  s: 6,
  m: 12,
}

const RatingIndent: Record<NonNullable<RatingProps['size']>, number> = {
  s: 2,
  m: 5,
}

export const Rating: FC<RatingProps> = ({
  value,
  size = 'm',
  disabled = false,
  count = 5,
  onChange,
}) => (
  <RatingControl
    value={value}
    count={count}
    disabled={disabled}
    onChange={onChange}
    children={renderProps => (
      <Flex>
        {renderProps.items.map((item, index) => (
          <FlexItem
            key={index}
            cursor={disabled ? undefined : 'pointer'}
            ml={index === 0 ? 0 : RatingIndent[size]}
            onClick={item.onClick}
            onMouseMove={item.onMouseEnter}
            onMouseOut={item.onMouseLeave}
          >
            <Icon
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
  disabled: false,
  count: 5,
}

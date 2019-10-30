import React, {FC} from 'react'
import {Flex, FlexItem, Icon, RatingControl} from '@qiwi/pijma-core'

export interface RatingProps {
  value: number
  onChange: (value: number) => void
  size?: 's' | 'm'
  disabled?: boolean
  count?: number
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
    onChange={onChange}
    value={value}
    count={count}
    disabled={disabled}
    children={renderProps => (
      <Flex>
        {renderProps.items.map((item, index) => (
          <FlexItem
            key={index}
            onClick={item.onClick}
            onMouseMove={item.onMouseEnter}
            onMouseOut={item.onMouseLeave}
            cursor={disabled ? undefined : 'pointer'}
            mr={index === (renderProps.items.length - 1) ? 0 : RatingIndent[size]}
          >
            <Icon
              key={index}
              name="star-solid"
              size={RatingSize[size]}
              color={item.hovered ? '#ff8c00' : item.active ? '#ff8c00' : '#cccccc'}
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

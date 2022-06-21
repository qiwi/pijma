import { Flex, FlexItem, Icon, RatingControl, Stub } from '@qiwi/pijma-core'
import React, { FC } from 'react'

export interface RatingProps {
  value?: number
  size?: 's' | 'm'
  disabled?: boolean
  count?: number
  stub?: boolean
  onChange?: (value: number) => void
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
  value = 0,
  size = 'm',
  disabled = false,
  count = 5,
  stub = false,
  onChange,
}) =>
  stub ? (
    <Flex
      justify="space-between"
      maxWidth={count * RatingSize[size] + (count - 1) * RatingIndent[size]}
      width={1}
    >
      {new Array(count).fill(1).map((_, index) => (
        <FlexItem key={index}>
          <Stub height={RatingSize[size]} width={RatingSize[size]} r="50%" />
        </FlexItem>
      ))}
    </Flex>
  ) : (
    <RatingControl
      value={value}
      count={count}
      disabled={disabled}
      onChange={onChange}
      children={(renderProps) => (
        <Flex
          justify="space-between"
          maxWidth={count * RatingSize[size] + (count - 1) * RatingIndent[size]}
          width={1}
        >
          {renderProps.items.map((item, index) => (
            <FlexItem
              key={index}
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
  value: 0,
  size: 'm',
  disabled: false,
  count: 5,
  stub: false,
}

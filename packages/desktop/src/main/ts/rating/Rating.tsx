import {
  Flex,
  FlexItem,
  getDataProps,
  Icon,
  RatingControl,
  Stub,
} from '@qiwi/pijma-core'
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
  ...rest
}) =>
  stub ? (
    <Flex>
      {new Array(count).fill(1).map((_, index) => (
        <FlexItem key={index} pl={index === 0 ? 0 : RatingIndent[size]}>
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
        <Flex {...getDataProps(rest)}>
          {renderProps.items.map((item, index) => (
            <FlexItem
              key={index}
              cursor={disabled ? undefined : 'pointer'}
              pl={index === 0 ? 0 : RatingIndent[size] / 2}
              pr={index === count - 1 ? 0 : RatingIndent[size] / 2}
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

Rating.displayName = 'Rating'

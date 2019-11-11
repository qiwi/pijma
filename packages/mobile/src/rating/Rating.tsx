import React, {FC} from 'react'
import {Flex, FlexItem, Icon, RatingControl, Stub} from '@qiwi/pijma-core'

export interface RatingProps {
  value?: number
  size?: 's' | 'm'
  disabled?: boolean
  count?: number
  onChange: (value: number) => void
  stub?: boolean
}

const RatingSize: Record<NonNullable<RatingProps['size']>, number> = {
  s: 6,
  m: 12,
}

const RatingIndent: Record<NonNullable<RatingProps['size']>, number> = {
  s: 1,
  m: 2.5,
}

export const Rating: FC<RatingProps> = ({
  value = 0,
  size = 'm',
  disabled = false,
  count = 5,
  onChange,
  stub = false,
}) => (
  stub ? (
    <Flex>
      {Array(count).fill(1).map((_width, index) => (
        <FlexItem
          key={index}
          pl={index === 0 ? 0 : RatingIndent[size]}
          pr={index === count - 1 ? 0 : RatingIndent[size]}
        >
          <Stub
            height={RatingSize[size]}
            width={RatingSize[size]}
            r={RatingSize[size] * 2}
          />
        </FlexItem>
      ))}
    </Flex>
  ) : (
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
              pl={index === 0 ? 0 : RatingIndent[size]}
              pr={index === count - 1 ? 0 : RatingIndent[size]}
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

)

Rating.defaultProps = {
  value: 0,
  size: 'm',
  disabled: false,
  count: 5,
  stub:  false,
}

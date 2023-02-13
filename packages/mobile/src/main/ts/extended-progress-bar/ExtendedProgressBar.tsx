import React, { FC } from 'react'

import { Card, Flex, FlexItem, Spacer, Stub } from '@qiwi/pijma-core'

import { Text } from '../typography'

export interface ExtendedProgressBarProps {
  value: number
  maxValue?: number
  titleStart?: string
  titleEnd?: string
  disabled?: boolean
  stub?: boolean
  formatValue?: (value: number) => string
}

export const ExtendedProgressBar: FC<ExtendedProgressBarProps> = ({
  value,
  maxValue = 1,
  titleStart,
  titleEnd,
  disabled = false,
  stub = false,
  formatValue = (v) => v,
}) => (
  <Spacer size="xxs">
    {titleStart || titleEnd ? (
      <Flex justify="space-between">
        <FlexItem width={stub ? 0.15 : undefined}>
          {titleStart && value !== undefined ? (
            <Text
              size="s"
              bold={false}
              stub={stub}
              display={stub ? 'block' : undefined}
              children={stub ? undefined : formatValue(value)}
              compact
            />
          ) : null}
        </FlexItem>
        <FlexItem width={stub ? 0.15 : undefined}>
          {titleEnd && value !== undefined && maxValue !== undefined ? (
            <Text
              size="s"
              bold={false}
              stub={stub}
              display={stub ? 'block' : undefined}
              children={
                stub ? undefined : formatValue(Math.max(maxValue - value, 0))
              }
              compact
            />
          ) : null}
        </FlexItem>
      </Flex>
    ) : null}
    <Flex>
      <FlexItem
        width={
          stub || disabled || maxValue === 0 || value >= maxValue
            ? 1
            : value / maxValue
        }
        minWidth="4px"
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        children={
          stub ? (
            <Stub height="4px" width={1} r={2} />
          ) : (
            <Card
              height="4px"
              width={1}
              r={2}
              bg={disabled ? '#E6E6E6' : maxValue === 0 ? '#F5F5F5' : '#FF8C00'}
            />
          )
        }
      />
      {!stub && !disabled && value < maxValue ? (
        <FlexItem ml={1} grow={1} minWidth="4px">
          <Card height="4px" width={1} r={2} bg="#F5F5F5" />
        </FlexItem>
      ) : null}
    </Flex>
    {titleStart || titleEnd ? (
      <Flex justify="space-between">
        <FlexItem width={stub ? 0.2 : undefined}>
          {titleStart ? (
            <Text
              size="s"
              bold={false}
              stub={stub}
              color="support"
              display={stub ? 'block' : undefined}
              children={titleStart}
              compact
            />
          ) : null}
        </FlexItem>
        <FlexItem width={stub ? 0.2 : undefined}>
          {titleEnd ? (
            <Text
              size="s"
              bold={false}
              stub={stub}
              color="support"
              display={stub ? 'block' : undefined}
              children={titleEnd}
              compact
            />
          ) : null}
        </FlexItem>
      </Flex>
    ) : null}
  </Spacer>
)

ExtendedProgressBar.displayName = 'ExtendedProgressBar'

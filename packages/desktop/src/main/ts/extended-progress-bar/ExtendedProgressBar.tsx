import React, { FC } from 'react'

import { Card, Flex, FlexItem, Spacer, Stub } from '@qiwi/pijma-core'

import { Paragraph, Text } from '../typography'

export interface ExtendedProgressBarProps {
  value: number
  maxValue?: number
  titleStart?: string
  titleEnd?: string
  stub?: boolean
  disabled?: boolean
  formatValue?: (value: number) => string
}

export const ExtendedProgressBar: FC<ExtendedProgressBarProps> = ({
  value,
  maxValue = 1,
  titleStart,
  titleEnd,
  stub = false,
  disabled = false,
  formatValue = (v) => v,
}) => (
  <Spacer size="xs">
    <Flex>
      <FlexItem
        width={
          stub || disabled || maxValue === 0 || value >= maxValue
            ? 1
            : value / maxValue
        }
        minWidth={2}
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        children={
          stub ? (
            <Stub height={2} width={1} r={4} />
          ) : (
            <Card
              height={2}
              width={1}
              r={4}
              bg={disabled ? '#E6E6E6' : maxValue === 0 ? '#F5F5F5' : '#FF8C00'}
            />
          )
        }
      />
      {!stub && !disabled && value < maxValue ? (
        <FlexItem ml={1} grow={1} minWidth={2}>
          <Card height={2} width={1} r={4} bg="#F5F5F5" />
        </FlexItem>
      ) : null}
    </Flex>
    {titleStart || titleEnd ? (
      <Flex mt={2} justify="space-between">
        <FlexItem width={stub ? 0.15 : undefined}>
          {stub && titleStart ? (
            <Text size="s" display="block" compact stub />
          ) : titleStart ? (
            <Paragraph size="s" compact>
              <Text color="support">
                {titleStart}
                {value !== undefined ? ': ' : ''}
              </Text>
              {value !== undefined ? (
                <Text children={formatValue(value)} />
              ) : null}
            </Paragraph>
          ) : null}
        </FlexItem>
        <FlexItem width={stub ? 0.15 : undefined}>
          {stub && titleEnd ? (
            <Text size="s" display="block" compact stub />
          ) : titleEnd ? (
            <Paragraph size="s" compact>
              <Text color="support">
                {titleEnd}
                {value !== undefined && maxValue !== undefined ? ': ' : ''}
              </Text>
              {value !== undefined && maxValue !== undefined ? (
                <Text children={formatValue(Math.max(maxValue - value, 0))} />
              ) : null}
            </Paragraph>
          ) : null}
        </FlexItem>
      </Flex>
    ) : null}
  </Spacer>
)

ExtendedProgressBar.displayName = 'ExtendedProgressBar'

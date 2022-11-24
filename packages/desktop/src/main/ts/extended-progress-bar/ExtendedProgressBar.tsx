import { Card, Flex, FlexItem, Spacer, Stub } from '@qiwi/pijma-core'
import React, { FC } from 'react'

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
  formatValue,
}) => (
  <Spacer size="xs">
    <Flex>
      <FlexItem
        width={stub || disabled || maxValue === 0 ? 1 : value / maxValue}
        minWidth={2}
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        children={stub ? (
          <Stub height={2} width={1} r={4} />
        ) : (
          <Card
            height={2}
            width={1}
            r={4}
            bg={disabled ? '#E6E6E6' : maxValue === 0 ? '#F5F5F5' : '#FF8C00'}
          />
        )}
      />
      {!stub && !disabled && value < maxValue ? (
        <FlexItem ml={1} grow={1} minWidth={2}>
          <Card height={2} width={1} r={4} bg="#F5F5F5"/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
    {titleStart || titleEnd ? (
      <Flex mt={2} justify="space-between">
        <FlexItem width={stub ? 0.15 : undefined}>
          {stub && titleStart ? (
            <Text size="s" display="block" compact stub/>
          ) : titleStart ? (
            <Paragraph size="s" compact>
              <Text color="support">{titleStart}{value !== undefined ? ': ' : ''}</Text>
              {value !== undefined ? (
                <Text>
                  {formatValue !== undefined ? formatValue(value) : value}
                </Text>
              ) : (
                null
              )}
            </Paragraph>
          ) : (
            null
          )}
        </FlexItem>
        <FlexItem width={stub ? 0.15 : undefined}>
          {stub && titleEnd ? (
            <Text size="s" display="block" compact stub/>
          ) : titleEnd ? (
            <Paragraph size="s" compact>
              <Text color="support">
                {titleEnd}{value !== undefined && maxValue !== undefined ? ': ' : ''}
              </Text>
              {value !== undefined && maxValue !== undefined ? (
                <Text>
                  {formatValue !== undefined ? formatValue(maxValue - value) : maxValue - value}
                </Text>
              ) : (
                null
              )}
            </Paragraph>
          ): (
            null
          )}
        </FlexItem>
      </Flex>
    ) : (
      null
    )}
  </Spacer>
)

ExtendedProgressBar.displayName = 'ExtendedProgressBar'

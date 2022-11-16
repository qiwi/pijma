import { Card, Flex, FlexItem, Spacer, Stub } from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { Text } from '../typography'


export interface ExtendedProgressBarProps {
  value: number
  maxValue?: number
  titleStart?: string
  titleEnd?: string
  stub?: boolean
  formatValue?: (value: number) => string
}

export const ExtendedProgressBar: FC<ExtendedProgressBarProps> = ({
  value,
  maxValue = 1,
  titleStart,
  titleEnd,
  stub = false,
  formatValue,
}) => (
  <Spacer size="xxs">
    {titleStart || titleEnd ? (
      <Flex justify='space-between'>
        <FlexItem width={stub ? 0.15 : undefined}>
          {titleStart ? (
            <Text
              size="s"
              bold={false}
              stub={stub}
              display={stub ? 'block' : undefined}
              children={stub ? (
                undefined
              ) : formatValue !== undefined ? (
                formatValue(value)
              ) : (
                value
              )}
              compact
            />
          ) : (
            null
          )}
        </FlexItem>
        <FlexItem width={stub ? 0.15 : undefined}>
          {titleEnd ? (
            <Text
              size="s"
              bold={false}
              stub={stub}
              display={stub ? 'block' : undefined}
              children={stub ? (
                undefined
              ) : formatValue !== undefined ? (
                formatValue(maxValue - value)
              ) : (
                maxValue - value
              )}
              compact
            />
          ) : (
            null
          )}
        </FlexItem>
      </Flex>
    ) : (
      null
    )}
    <Flex>
      <FlexItem
        width={stub ? 1 : value / maxValue}
        minWidth={2}
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      >
        {stub ? (
          <Stub height="4px" width={1} r={2} />
        ) : (
          <Card height="4px" width={1} r={2} bg="#FF8C00"/>
        )}
      </FlexItem>
      {!stub && (value < maxValue) ? (
        <FlexItem ml="2px" grow={1} minWidth={2}>
          <Card height="4px" width={1} r={2} bg="#F5F5F5"/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
    {titleStart || titleEnd ? (
      <Flex justify='space-between'>
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
          ) : (
            null
          )}
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
          ) : (
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

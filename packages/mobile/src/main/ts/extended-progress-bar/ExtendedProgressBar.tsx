import { Card, Flex, FlexItem, Spacer, Stub } from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { Text } from '../typography'


export interface ExtendedProgressBarProps {
  value: number
  maxValue?: number
  valueAffix?: string,
  titleStart?: string
  titleEnd?: string
  stub?: boolean
}

export const ExtendedProgressBar: FC<ExtendedProgressBarProps> = ({
  value,
  maxValue = 1,
  valueAffix,
  titleStart,
  titleEnd,
  stub = false,
}) => stub ? (
  <Spacer size="xs">
    {titleStart || titleEnd ? (
      <Flex justify="space-between">
        {titleStart ? (
          <FlexItem width={0.15}>
            <Text size="s" display="block" compact stub/>
          </FlexItem>
        ) : (
          null
        )}
        {titleEnd ? (
          <FlexItem width={0.15}>
            <Text size="s" display="block" compact stub/>
          </FlexItem>
        ) : (
          null
        )}
      </Flex>
    ) : (
      null
    )}
    <Stub height="4px" width={1} r={2} />
    {titleStart || titleEnd ? (
      <Flex justify="space-between">
        {titleStart ? (
          <FlexItem width={0.2}>
            <Text size="s" display="block" compact stub/>
          </FlexItem>
        ) : (
          null
        )}
        {titleEnd ? (
          <FlexItem width={0.2}>
            <Text size="s" display="block" compact stub/>
          </FlexItem>
        ) : (
          null
        )}
      </Flex>
    ) : (
      null
    )}
  </Spacer>
) : (
  <Spacer size="xxs">
    {titleStart || titleEnd ? (
      <Flex justify='space-between'>
        <FlexItem>
          {titleStart ? (
            <Text size="s" compact bold={false}>
              {value}
              {valueAffix ? ` ${valueAffix}` : ''}
            </Text>
          ) : (
            null
          )}
        </FlexItem>
        <FlexItem>
          {titleEnd ? (
            <Text size="s" compact bold={false}>
              {maxValue - value}
              {valueAffix ? ` ${valueAffix}` : ''}
            </Text>
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
        width={value / maxValue}
        minWidth={2}
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      >
        <Card height="4px" width={1} r={2} bg="#FF8C00"/>
      </FlexItem>
      {value < maxValue ? (
        <FlexItem ml="2px" grow={1} minWidth={2}>
          <Card height="4px" width={1} r={2} bg="#F5F5F5"/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
    {titleStart || titleEnd ? (
      <Flex justify='space-between'>
        <FlexItem>
          {titleStart ? (
            <Text size="s" compact bold={false} color="support">
              {titleStart}
            </Text>
          ) : (
            null
          )}
        </FlexItem>
        <FlexItem>
          {titleEnd ? (
            <Text size="s" compact bold={false} color="support">
              {titleEnd}
            </Text>
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

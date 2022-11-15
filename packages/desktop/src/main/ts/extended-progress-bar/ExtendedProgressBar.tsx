import { Card, Flex, FlexItem, Spacer, Stub } from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { Paragraph, Text } from '../typography'


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
    <Stub height={2} width={1} r={4} />
    {titleStart || titleEnd ? (
      <Flex justify="space-between">
        {titleStart ? (
          <FlexItem width={0.15}>
            <Text size="s" display="block" stub/>
          </FlexItem>
        ) : (
          null
        )}
        {titleEnd ? (
          <FlexItem width={0.15}>
            <Text size="s" display="block" stub/>
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
  <Spacer size="xs">
    <Flex>
      <FlexItem
        width={value / maxValue}
        minWidth={2}
        transition="width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
      >
        <Card height={2} width={1} r={4} bg="#FF8C00"/>
      </FlexItem>
      {value < maxValue ? (
        <FlexItem ml={1} grow={1} minWidth={2}>
          <Card height={2} width={1} r={4} bg="#F5F5F5"/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
    {titleStart || titleEnd ? (
      <Flex mt={2} justify="space-between">
        <FlexItem>
          {titleStart ? (
            <Paragraph size="s">
              <Text color="support">{titleStart}: </Text>
              <Text>
                {value}
                {valueAffix ? ` ${valueAffix}` : ''}
              </Text>
            </Paragraph>
          ): (
            null
          )}
        </FlexItem>
        <FlexItem>
          {titleEnd ? (
            <Paragraph size="s">
              <Text color="support">{titleEnd}: </Text>
              <Text>
                {maxValue - value}
                {valueAffix ? ` ${valueAffix}` : ''}
              </Text>
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

import {
  Block,
  Breaker,
  Card,
  Flex,
  FlexItem,
  Icon,
  IconProps,
  Pos,
} from '@qiwi/pijma-core'
import React, { FC, isValidElement, ReactNode } from 'react'

import { Paragraph } from '../typography'

export interface AlertBlockProps {
  type: 'success' | 'warning' | 'waiting' | 'failure' | 'info' | 'inverse'
  icon?: ReactNode
}

const AlertBlockBackground: Record<
  NonNullable<AlertBlockProps['type']>,
  string
> = {
  success: '#EDF8EF',
  waiting: '#FFF8E6',
  warning: '#FF8C001A',
  failure: '#FAE6E8',
  info: '#F5F5F5',
  inverse: '#2D3540',
}

const AlertBlockIcon: Record<
  NonNullable<AlertBlockProps['type']>,
  IconProps & { bg: string }
> = {
  success: { name: 'success', color: '#4BBD5C', bg: '#fff' },
  waiting: { name: 'clock-solid', color: '#FFB800', bg: '#fff' },
  warning: { name: 'attention', color: '#FF8C00', bg: '#fff' },
  failure: { name: 'attention', color: '#D0021B', bg: '#fff' },
  info: { name: 'info', color: '#E6E6E6', bg: '#666666' },
  inverse: { name: 'success', color: '#4BBD5C', bg: '#fff' },
}

export const AlertBlock: FC<AlertBlockProps> = ({ children, icon, type }) => {
  const iconComponent = isValidElement(icon) ? (
    icon
  ) : icon === undefined ? (
    <Pos type="relative">
      <Pos type="absolute" top="4px" left="4px">
        <Card bg={AlertBlockIcon[type].bg} width={4} height={4} r={8} />
      </Pos>
      <Pos type="relative">
        <Icon
          name={AlertBlockIcon[type].name}
          size={6}
          color={AlertBlockIcon[type].color}
        />
      </Pos>
    </Pos>
  ) : null
  return (
    <Block bg={AlertBlockBackground[type]}>
      <Flex p={4}>
        <FlexItem mr={3}>{iconComponent}</FlexItem>
        <FlexItem>
          <Paragraph size="s" color={type === 'inverse' ? 'inverse' : 'default'}>
            <Breaker children={children} />
          </Paragraph>
        </FlexItem>
      </Flex>
    </Block>
  )
}

AlertBlock.displayName = 'AlertBlock'

import {
  AlertBlockControl,
  Block,
  Breaker,
  Card,
  FlexItem,
  FlexPos,
  Icon,
  IconProps,
  Pos,
} from '@qiwi/pijma-core'
import React, { FC, isValidElement, ReactNode } from 'react'

import { Paragraph } from '../typography'

export interface AlertBlockProps {
  type: 'success' | 'warning' | 'waiting' | 'failure' | 'info' | 'promo'
  icon?: ReactNode
  onHide?: () => void
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
  promo: '#2D3540',
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
  promo: { name: 'success', color: '#4BBD5C', bg: '#fff' },
}

export const AlertBlock: FC<AlertBlockProps> = ({
  children,
  icon,
  type,
  onHide,
}) => {
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
    <AlertBlockControl
      onHide={onHide}
      children={(renderProps) => (
        <Block bg={AlertBlockBackground[type]}>
          <FlexPos
            display="flex"
            type="relative"
            py={5}
            pl={6}
            pr={onHide !== undefined ? 18 : 6}
          >
            <FlexItem mr={3}>{iconComponent}</FlexItem>
            <FlexItem>
              <Paragraph bold color={type === 'promo' ? 'inverse' : 'default'}>
                <Breaker children={children} />
              </Paragraph>
            </FlexItem>
            {onHide !== undefined ? (
              <Pos
                cursor="pointer"
                type="absolute"
                right={6}
                top={5}
                onClick={renderProps.onCloseClick}
                onMouseEnter={renderProps.onCloseMouseEnter}
                onMouseLeave={renderProps.onCloseMouseLeave}
                children={(
                  <Icon
                    size={6}
                    color={type === 'promo' ? '#999' : '#666'}
                    name="cross-small"
                  />
                )}
              />
            ) : (
              null
            )}
          </FlexPos>
        </Block>
      )}
    />
  )
}

AlertBlock.displayName = 'AlertBlock'

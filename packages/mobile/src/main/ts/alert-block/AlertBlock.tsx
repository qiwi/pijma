import React, { FC, isValidElement, ReactNode } from 'react'

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

import { Paragraph } from '../typography'

export interface AlertBlockProps {
  type: 'success' | 'warning' | 'waiting' | 'failure' | 'info' | 'promo'
  icon?: ReactNode
  children?: ReactNode
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
            py={4}
            pl={4}
            pr={onHide !== undefined ? 14 : 4}
          >
            <FlexItem mr={2}>{iconComponent}</FlexItem>
            <FlexItem my="2px">
              <Paragraph
                size="s"
                bold
                color={type === 'promo' ? 'inverse' : 'default'}
              >
                <Breaker children={children} />
              </Paragraph>
            </FlexItem>
            {onHide !== undefined ? (
              <Pos
                cursor="pointer"
                type="absolute"
                right={4}
                top={4}
                onClick={renderProps.onCloseClick}
                onMouseEnter={renderProps.onCloseMouseEnter}
                onMouseLeave={renderProps.onCloseMouseLeave}
                children={
                  <Icon
                    color={type === 'promo' ? '#999' : '#666'}
                    size={6}
                    name="cross-small"
                  />
                }
              />
            ) : null}
          </FlexPos>
        </Block>
      )}
    />
  )
}

AlertBlock.displayName = 'AlertBlock'

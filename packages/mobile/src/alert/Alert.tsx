import React, {FC} from 'react'

import {Flex, FlexItem, Icon, Card, AlertControl, IconProps} from '@qiwi/pijma-core'

import {Paragraph, ParagraphProps} from '../typography'
import {LinkProps, Link} from '../link'

export interface AlertProps {
  text: string
  type: 'success' | 'warning' | 'failure' | 'general'
  action?: string
  onHide?: () => void
  onClick?: () => void
}

const AlertBackgroundColor: Record<NonNullable<AlertProps['type']>, string> = {
  success: '#4bbd5c',
  warning: '#ff8c00',
  failure: '#d0021b',
  general: '#f5f5f5',
}

const AlertColorText: Record<NonNullable<AlertProps['type']>, ParagraphProps['color']> = {
  success: 'inverse',
  warning: 'inverse',
  failure: 'inverse',
  general: 'default',
}

const AlertColorActionText: Record<NonNullable<AlertProps['type']>, LinkProps['inverse']> = {
  success: true,
  warning: true,
  failure: true,
  general: false,
}

const AlertIconName: Record<NonNullable<AlertProps['type']>, IconProps['name']> = {
  success: 'success',
  warning: 'warning',
  failure: 'attention',
  general: 'info',
}

const AlertIconColor: Record<NonNullable<AlertProps['type']>, string> = {
  success: '#ffffff',
  warning: '#ffffff',
  failure: '#ffffff',
  general: '#666',
}

export const Alert: FC<AlertProps> = ({
  type = 'general',
  text,
  action,
  onHide,
  onClick,
}) => (
  <AlertControl
    onHide={onHide}
    children={renderProps => (
      <Card bg={AlertBackgroundColor[type]}>
        <Flex
          minHeight={14}
          justify="flex-start"
          p={4.5}
        >
          <FlexItem
            mr={3}
          >
            <Icon
              size={6}
              name={AlertIconName[type]}
              color={AlertIconColor[type]}
            />
          </FlexItem>
          <FlexItem mr={onHide ? 4 : 0} overflow="hidden">
            <Paragraph
              color={AlertColorText[type]}
              children={text}
            />
            {action ? (
              <Link inverse={AlertColorActionText[type]} onClick={onClick} children={action}/>
            ) : (
              null
            )}
          </FlexItem>
          {onHide ? (
            <FlexItem
              ml="auto"
              cursor="pointer"
              opacity={renderProps.hover ? 0.7 : 1}
              transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
              onClick={renderProps.onClick}
              onMouseMove={renderProps.onMouseEnter}
              onMouseOut={renderProps.onMouseLeave}
            >
              <Icon
                size={6}
                name="cross-small"
                color={AlertIconColor[type]}
              />
            </FlexItem>
          ) : (
            null
          )}
        </Flex>
      </Card>
    )}
  />

)

Alert.defaultProps = {
  type: 'general',
}

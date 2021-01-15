import React, {FC} from 'react'

import {Flex, FlexItem, Icon, Card, AlertControl, IconProps, Value, Box} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {Link} from '../link'

export interface AlertProps {
  text: string
  type: 'success' | 'warning' | 'failure' | 'general'
  width?: Value
  action?: string
  onHide?: () => void
  onClick?: () => void
}

const AlertIconColor: Record<NonNullable<AlertProps['type']>, string> = {
  success: '#4bbd5c',
  warning: '#ff8c00',
  failure: '#d0021b',
  general: '#666666',
}

const AlertIconName: Record<NonNullable<AlertProps['type']>, IconProps['name']> = {
  success: 'success',
  warning: 'warning',
  failure: 'attention',
  general: 'info',
}

export const Alert: FC<AlertProps> = ({
  type = 'general',
  text,
  width = 295,
  action,
  onHide,
  onClick,
}) => (
  <AlertControl
    onHide={onHide}
    children={renderProps => (
      <Card bg="#F5F5F5" s="inset 0 -1px 0 0 #e6e6e6">
        <Flex
          maxWidth={width}
          minHeight={16}
          mx="auto"
          my={0}
          py={5}
        >
          <FlexItem>
            <Icon
              name={AlertIconName[type]}
              color={AlertIconColor[type]}
            />
          </FlexItem>
          <FlexItem overflow="hidden" mx={4}>
            <Paragraph
              children={text}
            />
            {action ? (
              <Box mt={1}>
                <Paragraph>
                  <Link
                    bold
                    onClick={onClick}
                    children={action}
                  />
                </Paragraph>
              </Box>
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
                name="cross-small"
                color="#666666"
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
  width: 295,
}

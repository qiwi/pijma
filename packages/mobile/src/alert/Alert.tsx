import React, {FC} from 'react'

import {Flex, FlexItem, Icon, AlertControl, IconProps, Box} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {Link} from '../link'

export interface AlertProps {
  text: string
  type: 'success' | 'warning' | 'failure' | 'general'
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
  action,
  onHide,
  onClick,
}) => (
  <AlertControl
    onHide={onHide}
    children={renderProps => (
      <Flex
        minHeight={14}
        justify="flex-start"
        p={4}
      >
        <FlexItem
          mr={3}
        >
          <Icon
            name={AlertIconName[type]}
            color={AlertIconColor[type]}
          />
        </FlexItem>
        <FlexItem mr={onHide ? 4 : 0} overflow="hidden">
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
    )}
  />

)

Alert.defaultProps = {
  type: 'general',
}

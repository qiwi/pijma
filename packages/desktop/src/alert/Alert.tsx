import React, {FC} from 'react'
import {Flex, FlexItem, Icon, Card, AlertControl, IconProps, Value, Box} from '@qiwi/pijma-core'
import {Paragraph, ParagraphProps} from '../typography'
import {Button} from '../button'

export interface AlertProps {
  text: string
  type: 'success' | 'warning' | 'failure' | 'general'
  width?: Value
  actionText?: string
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

export const Alert: FC<AlertProps> = ({type = 'general', text, width = 295, actionText, onHide, onClick}) => (
  <AlertControl
    onHide={onHide}
    children={renderProps => (
      <Card bg={AlertBackgroundColor[type]}>
        <Flex
          maxWidth={width}
          minHeight={16}
          mx="auto"
          my={0}
          py={2}
          px={12}
          align="center"
        >
          <FlexItem>
            <Icon
              size={6}
              name={AlertIconName[type]}
              color={AlertIconColor[type]}
            />
          </FlexItem>
          <FlexItem overflow="hidden" mx={4}>
            <Flex direction="row" align="center">
              <Paragraph
                color={AlertColorText[type]}
                children={text}
              />
              {actionText ? (
                <Box ml={2}>
                  <Button kind="simple" size="minor" type="submit" text={actionText} onClick={onClick}/>
                </Box>
              ) : (
                null
              )}
            </Flex>
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
                name="cross"
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
  width: 295,
}

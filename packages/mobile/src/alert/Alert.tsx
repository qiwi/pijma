import React, {FC} from 'react'
import {Flex, FlexItem, Icon, Card, AlertControl, IconProps} from '@qiwi/pijma-core'
import {Paragraph, ParagraphProps} from '../typography'

export interface AlertProps {
  text: string
  type: 'success' | 'warning' | 'failure' | 'general'
  onHide?: () => void
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

export const Alert: FC<AlertProps> = ({type = 'general', text, onHide}) => (
  <AlertControl
    onHide={onHide}
    children={renderProps => (
      <Card bg={AlertBackgroundColor[type]}>
        <Flex
          minHeight={14}
          align="center"
          justify="flex-start"
          pt={2}
          pb={2}
        >
          <FlexItem
            ml={4}
            mr={3}
          >
            <Icon
              size={6}
              name={AlertIconName[type]}
              color={AlertIconColor[type]}
            />
          </FlexItem>
          <FlexItem mr={onHide ? 3 : 4} overflow="hidden">
            <Paragraph
              color={AlertColorText[type]}
              children={text}
            />
          </FlexItem>
          {onHide ? (
            <FlexItem
              ml="auto"
              mr={4}
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
}

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
          minHeight={16}
          align="center"
          pt={2}
          pb={2}
        >
          <Flex mr="auto">
            <FlexItem
              ml={4}
              mr={4}
              align="center"
            >
              <Icon
                size={6}
                name={AlertIconName[type]}
                color={AlertIconColor[type]}
              />
            </FlexItem>
            <FlexItem align="center">
              <Paragraph
                color={AlertColorText[type]}
                children={text}
              />
            </FlexItem>
          </Flex>
          <Flex
            justify="flex-end"
            ml={4}
          >
            {onHide ? (<FlexItem
              mr={4}
              cursor="pointer"
              onClick={renderProps.onClick}
            >
              <Icon
                size={6}
                name="cross"
                color={AlertIconColor[type]}
              />
            </FlexItem>) : (
              null
            )}
          </Flex>
        </Flex>
      </Card>
    )}
  />

)

Alert.defaultProps = {
  type: 'general',
}

import React, {FC, ReactNode} from 'react'

import {Flex, FlexItem, Icon, Box, LinkControlProps} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {SectionLink} from '../link'

export interface MenuItemProps {
  text: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

export const MenuItem: FC<MenuItemProps> = (props) => (
  <SectionLink
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    flat
  >
    {() => (
      <Flex px={6} py={2} minHeight={14}>
        {props.icon ? (
          <FlexItem align={props.notes ? undefined : 'center'} shrink={0} mr={4}>
            {props.icon}
          </FlexItem>
        ) : (
          null
        )}
        <FlexItem align="center" grow={1}>
          <Flex justify="center" direction="column">
            <Paragraph clamp={props.icon && !props.notes ? 2 : undefined} bold>{props.text}</Paragraph>
            {props.notes ? (
              <Box mt={1}>
                <Paragraph size="s" color="support">
                  {props.notes}
                </Paragraph>
              </Box>
            ) : (
              null
            )}
          </Flex>
        </FlexItem>
        {props.submenu ? (
          <FlexItem align="center" shrink={0} width={6} height={6} ml={3}>
            <Icon name="angle-right"/>
          </FlexItem>
        ) : (
          null
        )}
      </Flex>
    )}
  </SectionLink>
)

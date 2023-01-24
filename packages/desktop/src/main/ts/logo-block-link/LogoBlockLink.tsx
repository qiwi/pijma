import {
  Block,
  Box,
  Card,
  Flex,
  FlexItem,
  getDataProps,
  Image,
  LinkControlProps,
  Pos,
  Spacer,
  Stub,
} from '@qiwi/pijma-core'
import React, { FC, ReactElement, ReactNode } from 'react'

import { BlockLink } from '../link'
import { Paragraph, Text } from '../typography'

export interface LogoBlockLinkProps {
  icon: ReactNode
  title: string
  description?: string
  actions?: ReactElement[]
  tabIndex?: number
  href: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['download']
  rel?: LinkControlProps['rel']
  horizontal?: boolean
  stub?: boolean
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

export const LogoBlockLink: FC<LogoBlockLinkProps> = ({
  title,
  icon,
  description,
  actions,
  ...props
}) =>
  props.stub ? (
    <Block>
      {props.horizontal ? (
        <Box p={4}>
          <Flex align="baseline">
            <FlexItem shrink={0} mr={4} width={12} height={12}>
              <Stub height={12} width={12} r={24} />
            </FlexItem>
            <FlexItem align="center" width={1}>
              <Spacer size="xxs">
                <Box maxWidth={38} width={1} pr={4.5}>
                  <Text display="block" size="m" stub />
                </Box>
                {description ? (
                  <Box maxWidth={18} width={1}>
                    <Text display="block" size="s" stub />
                  </Box>
                ) : null}
              </Spacer>
            </FlexItem>
          </Flex>
        </Box>
      ) : (
        <Pos type="relative">
          <Box p={4} height={description ? 60 : 55}>
            <Box width={16} height={16} mt={7} mx="auto">
              <Stub height={16} width={16} r={32} />
            </Box>
            <Box mt={6} mx="auto" maxWidth={38} width={1} pl={4.5} pr={4.5}>
              <Text display="block" size="m" stub />
            </Box>
            {description ? (
              <Box mt={1} mx="auto" maxWidth={18} width={1}>
                <Text display="block" size="s" stub />
              </Box>
            ) : null}
          </Box>
        </Pos>
      )}
    </Block>
  ) : (
    <BlockLink
      {...getDataProps(props).data}
      title={title}
      accent
      tabIndex={props.tabIndex}
      href={props.href}
      target={props.target}
      download={props.download}
      rel={props.rel}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {({ active, focus, hover }) =>
        props.horizontal ? (
          <Box p={4}>
            <Flex align="baseline">
              <FlexItem shrink={0} mr={4} width={12} height={12}>
                {typeof icon === 'string' ? (
                  <Image src={icon} alt={title} width={12} height={12} />
                ) : (
                  icon
                )}
              </FlexItem>
              <FlexItem align="center">
                <Spacer size="xxs">
                  <Paragraph
                    clamp={description ? 1 : 2}
                    color="default"
                    size="m"
                    bold
                    children={title}
                  />
                  {description ? (
                    <Paragraph
                      clamp={1}
                      color="support"
                      size="s"
                      children={description}
                    />
                  ) : null}
                </Spacer>
              </FlexItem>
              {actions ? (
                <Pos
                  opacity={active || focus || hover ? 1 : 0}
                  transition="opacity 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                  type="absolute"
                  top={0}
                  bottom={0}
                  right={0}
                >
                  <Card
                    display="flex"
                    height="100%"
                    bg="linear-gradient(to right, rgba(255, 255, 255, 0), #fff 48px)"
                  >
                    <Flex pl={12} align="center">
                      {actions.map((action, index) => (
                        <FlexItem
                          mr={index === actions.length - 1 ? 4 : undefined}
                          ml={index !== 0 ? 3 : 'auto'}
                          key={index}
                          children={action}
                        />
                      ))}
                    </Flex>
                  </Card>
                </Pos>
              ) : null}
            </Flex>
          </Box>
        ) : (
          <Pos type="relative">
            <Box p={4} height={description ? 60 : 55}>
              <Box width={16} height={16} mt={7} mx="auto">
                {typeof icon === 'string' ? (
                  <Image src={icon} alt={title} width={16} height={16} />
                ) : (
                  icon
                )}
              </Box>
              <Box mt={6} mx="auto">
                <Paragraph
                  clamp={description ? 2 : 3}
                  color="default"
                  size="m"
                  bold
                  align="center"
                  children={title}
                />
              </Box>
              {description ? (
                <Box mt={1} mx="auto">
                  <Paragraph
                    clamp={2}
                    color="support"
                    size="s"
                    align="center"
                    children={description}
                  />
                </Box>
              ) : null}
              {actions ? (
                <Pos
                  height={description ? 27 : 22}
                  left={0}
                  right={0}
                  bottom={0}
                  opacity={active || focus || hover ? 1 : 0}
                  transition="opacity 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                  type="absolute"
                >
                  <Card height="100%" bg="#fff">
                    <Flex
                      pt={description ? 2 : undefined}
                      justify="center"
                      align="center"
                    >
                      {actions.map((action, index) => (
                        <FlexItem
                          ml={index !== 0 ? 3 : undefined}
                          key={index}
                          children={action}
                        />
                      ))}
                    </Flex>
                  </Card>
                </Pos>
              ) : null}
            </Box>
          </Pos>
        )
      }
    </BlockLink>
  )

LogoBlockLink.displayName = 'LogoBlockLink'

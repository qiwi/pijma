import React, {FC, ReactNode} from 'react'
import {Box, Card, Lnk, Flex, FlexItem, Spacer, LinkControl} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface LogoLinkProps {
  icon: ReactNode
  title: string
  description?: string
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  horizontal?: boolean
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const CardLink = Card.withComponent(Lnk)
const Img = Box.withComponent('img')

export const LogoLink: FC<LogoLinkProps> = ({title, icon, description, horizontal, ...props}) => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={(renderProps) => (
      <CardLink
        display="block"
        overflow="hidden"
        bg={renderProps.hover || renderProps.focus || renderProps.active ? '#f5f5f5' : undefined}
        cursor="pointer"
        r={10}
        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        tabIndex={props.tabIndex}
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        target={props.target}
        download={props.download}
      >
        {horizontal ? (
          <Box p={4}>
            <Flex align="baseline">
              <FlexItem
                shrink={0}
                mr={4}
                width={12}
                height={12}
              >
                {typeof icon === 'string' ? (
                  <Img
                    src={icon}
                    alt={title}
                    maxWidth={12}
                    maxHeight={12}
                  />
                ) : (
                  icon
                )}
              </FlexItem>
              <FlexItem overflow="hidden" align="center">
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
                  ) : (
                    null
                  )}
                </Spacer>
              </FlexItem>
            </Flex>
          </Box>
        ) : (
          <Box p={4} height={description ? 53 : 48}>
            <Box width={16} height={16} mx="auto">
              {typeof icon === 'string' ? (
                <Img
                  src={icon}
                  alt={title}
                  maxWidth={16}
                  maxHeight={16}
                />
              ) : (
                icon
              )}
            </Box>
            <Box mt={6}>
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
                  clamp={1}
                  color="support"
                  size="s"
                  align="center"
                  children={description}
                />
              </Box>
            ) : (
              null
            )}
          </Box>
        )}
      </CardLink>
    )}
  />
)

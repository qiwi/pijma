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
  vertical?: boolean
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const CardLink = Card.withComponent(Lnk)
const Img = Box.withComponent('img')

export const LogoLink: FC<LogoLinkProps> = ({title, icon, description, vertical, ...props}) => (
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
        bg={renderProps.hover || renderProps.focus || renderProps.active ? '#f5f5f5' : ''}
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
        {!vertical ? (
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
              <FlexItem maxHeight={18} overflow="hidden" align="center">
                <Spacer size="xxs">
                  <Box maxHeight={18} overflow="hidden">
                    <Paragraph
                      lines={2}
                      color="default"
                      size="m"
                      bold
                      children={title}
                    />
                  </Box>
                  {
                    description ? (
                      <Box maxHeight={10} overflow="hidden">
                        <Paragraph
                          lines={1}
                          color="support"
                          size="s"
                          children={description}
                        />
                      </Box>
                    ) : (
                      null
                    )
                  }
                </Spacer>
              </FlexItem>
            </Flex>
          </Box>
        ) : (
          <Box p={4} height={38}>
            <Box width={14} height={14} mx="auto">
              {typeof icon === 'string' ? (
                <Img
                  src={icon}
                  alt={title}
                  maxWidth={14}
                  maxHeight={14}
                />
              ) : (
                icon
              )}
            </Box>
            <Box mt={3} maxHeight={description ? 10 : 15} overflow="hidden">
              <Paragraph
                lines={3}
                color="default"
                size="s"
                bold
                align="center"
                children={title}
              />
            </Box>
            {description ? (
              <Box
                mt={1}
                mx="auto"
                maxHeight={10}
                overflow="hidden"
              >
                <Paragraph
                  lines={1}
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
        )
        }
      </CardLink>
    )}
  />
)

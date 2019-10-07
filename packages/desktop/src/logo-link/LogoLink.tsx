import React, {FC, ReactNode} from 'react'

import {Box, Flex, FlexItem, Spacer} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {SectionLink} from '../link'

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

const Img = Box.withComponent('img')

export const LogoLink: FC<LogoLinkProps> = ({title, icon, description, horizontal, ...props}) => (
  <SectionLink
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  >
    {() => (
      horizontal ? (
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
      )
    )}
  </SectionLink>
)

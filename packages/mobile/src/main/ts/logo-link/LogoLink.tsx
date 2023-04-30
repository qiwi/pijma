import React, { FC, ReactNode } from 'react'

import {
  Box,
  Flex,
  FlexItem,
  Image,
  LinkControlProps,
  Spacer,
} from '@qiwi/pijma-core'

import { SectionLink } from '../link'
import { Paragraph } from '../typography'

export interface LogoLinkProps {
  icon: ReactNode
  title: string
  description?: string
  tabIndex?: number
  href: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['download']
  rel?: LinkControlProps['rel']
  horizontal?: boolean
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

export const LogoLink: FC<LogoLinkProps> = ({
  title,
  icon,
  description,
  horizontal,
  ...props
}) => (
  <SectionLink
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  >
    {() =>
      horizontal ? (
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
          </Flex>
        </Box>
      ) : (
        <Box p={4} height={38}>
          <Box width={14} height={14} mx="auto">
            {typeof icon === 'string' ? (
              <Image src={icon} alt={title} width={14} height={14} />
            ) : (
              icon
            )}
          </Box>
          <Box mt={3}>
            <Paragraph
              clamp={description ? 2 : 3}
              color="default"
              size="s"
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
          ) : null}
        </Box>
      )
    }
  </SectionLink>
)

LogoLink.displayName = 'LogoLink'

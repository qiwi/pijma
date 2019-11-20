import React, {FC, ReactNode} from 'react'

import {Box, Flex, FlexItem, Spacer, Image, LinkControlProps, Stub} from '@qiwi/pijma-core'

import {Paragraph, Text} from '../typography'
import {SectionLink} from '../link'

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
  stub?: boolean
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

export const LogoLink: FC<LogoLinkProps> = ({
  title,
  icon,
  description,
  horizontal,
  stub = false,
  ...props
}) => (
  stub ? (
    horizontal ? (
      <Box p={4}>
        <Flex>
          <FlexItem
            align="baseline"
            mr={4}
            width={12}
            height={12}
          >
            <Stub height={12} width={12} r={24}/>
          </FlexItem>
          <FlexItem align="center" width={1}>
            <Spacer size="xxs">
              <Box maxWidth={38} width={1}>
                <Text
                  display="block"
                  size="m"
                  stub
                />
              </Box>
              {description ? (
                <Box maxWidth={18} width={1}>
                  <Text
                    display="block"
                    size="s"
                    stub
                  />
                </Box>
              ) : (
                null
              )}
            </Spacer>
          </FlexItem>
        </Flex>
      </Box>
    ) : (
      <Box p={4} height={38}>
        <Box width={16} height={16} mx="auto">
          <Stub height={16} width={16} r={32}/>
        </Box>
        <Box mt={3} mx="auto" maxWidth={38} width={1}>
          <Text
            display="block"
            size="m"
            stub
          />
        </Box>
        {description ? (
          <Box mt={1} mx="auto" maxWidth={18} width={1}>
            <Text
              display="block"
              size="s"
              stub
            />
          </Box>
        ) : (
          null
        )}
      </Box>
    )
  ) : (
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
                  <Image
                    src={icon}
                    alt={title}
                    width={12}
                    height={12}
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
          <Box p={4} height={38}>
            <Box width={14} height={14} mx="auto">
              {typeof icon === 'string' ? (
                <Image
                  src={icon}
                  alt={title}
                  width={14}
                  height={14}
                />
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
            ) : (
              null
            )}
          </Box>
        )
      )}
    </SectionLink>
  )
)

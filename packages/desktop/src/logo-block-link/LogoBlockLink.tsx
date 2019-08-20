import React, {FC, ReactNode} from 'react'
import {Box, Flex, FlexItem, Spacer} from '@qiwi/pijma-core'
import {BlockLink} from '../link'
import {Paragraph} from '../typography'

export interface LogoBlockLinkProps {
  icon: ReactNode
  title: string
  description?: string
  actions?: ReactNode
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

export const LogoBlockLink: FC<LogoBlockLinkProps> = ({title, icon, description, horizontal, actions, ...props}) => (
  <BlockLink
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
    {({active, focus, hover}) => (
      <Box>
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
              <FlexItem maxHeight={12} overflow="hidden" align="center">
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
              {actions && (active || focus || hover) ? (
                Array.isArray(actions) ? (
                  <Box css={{position: 'absolute', right: 0}}>
                    <Flex justify="center" align="baseline">
                    {(actions as ReactNode[]).map(function(action: ReactNode, index) {
                      return <FlexItem align="center" mr={index === actions.length - 1 ? 4 : undefined} ml={index !== 0 ? 3 : 'auto'} key={index} children={action}/>
                    })}
                    </Flex>
                  </Box>
                ) : (
                  <FlexItem ml="auto" align="center" children={actions}/>
                )
              ) : (
                null
              )}
            </Flex>
          </Box>
        ) : (
          <Box p={4} height={description ? 60 : 55}>
            <Box width={16} height={16} mt={7} mx="auto">
              {typeof icon === 'string' ? (
                <Img src={icon} alt={title} maxWidth={16} maxHeight={16}/>
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
            {actions && (active || focus || hover) ? (
              <Box children={actions}/>
            ) : (
              null
            )}
          </Box>
        )}
      </Box>
    )}
  </BlockLink>
)

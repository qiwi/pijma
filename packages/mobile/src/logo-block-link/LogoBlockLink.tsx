import React, {FC, ReactElement, ReactNode} from 'react'
import {Box, Flex, FlexItem, Spacer} from '@qiwi/pijma-core'
import {BlockLink} from '../link'
import {Paragraph} from '../typography'

export interface LogoBlockLinkProps {
  icon: ReactNode
  title: string
  description?: string
  actions?: ReactElement[]
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

export const LogoBlockLink: FC<LogoBlockLinkProps> = ({title, icon, description, actions, ...props}) => (
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
    {() => (
      props.horizontal ? (
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
            {actions ? (
              actions.map((action, index) => (
                <FlexItem
                  pl={index === 0 ? 2 : undefined}
                  align="center"
                  ml={index !== 0 ? 3 : 'auto'}
                  key={index}
                  children={action}
                />
              ))
            ) : (
              null
            )}
          </Flex>
        </Box>
      ) : (
        <Box
          p={4}
          height={actions ? (description ? 56 : 50) : (description ? 43 : 42)}
        >
          <Box width={14} height={14} mt={2} mx="auto">
            {typeof icon === 'string' ? (
              <Img src={icon} alt={title} maxWidth={14} maxHeight={14}/>
            ) : (
              icon
            )}
          </Box>
          <Box mt={3} mx="auto">
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
          {actions ? (
            <Flex mt={3} mx="auto" align="baseline" justify="center">
              {actions.map((action, index) => (
                <FlexItem
                  ml={index !== 0 ? 3 : undefined}
                  key={index}
                  children={action}
                />
              ))}
            </Flex>
          ) : (
            null
          )}
        </Box>
      )
    )}
  </BlockLink>
)

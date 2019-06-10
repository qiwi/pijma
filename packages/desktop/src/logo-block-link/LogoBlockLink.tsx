import React, {FC, ReactNode} from 'react'
import {Box} from '@qiwi/pijma-core'
import {BlockLink} from '../link'
import {Paragraph} from '../typography'

export interface LogoBlockLinkProps {
  icon: ReactNode
  title: string
  description?: string
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const Img = Box.withComponent('img')

export const LogoBlockLink: FC<LogoBlockLinkProps> = ({title, icon, description, ...props}) => (
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
      <Box p={4} height={description ? 60 : 55}>
        <Box width={16} height={16} mt={7} mx="auto">
          {typeof icon === 'string' ? (
            <Img src={icon} alt={title} maxWidth={16} maxHeight={16}/>
          ) : (
            icon
          )}
        </Box>
        <Box mt={5} mx="auto" maxHeight={description ? 12 : 18} overflow="hidden">
          <Paragraph
            color="default"
            size="m"
            bold
            align="center"
            children={title}
          />
        </Box>
        {description ? (
          <Box mt={1} mx="auto" maxHeight={10} overflow="hidden">
            <Paragraph
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
  </BlockLink>
)

import React, {FC, ReactNode} from 'react'
import {Box} from '@qiwi/pijma-core'
import {BlockLink} from '../link'
import {Paragraph} from '../typography'

export interface LogoCardProps {
  description?: string
  icon: ReactNode
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
}

export const LogoCard: FC<LogoCardProps> = ({title, icon, description, ...props}) => (
  <BlockLink
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
      <Box p={4} pt={0} minHeight={55} css={{textAlign: 'center'}}>
        <Box width={16} height={16} mt={11} mx="auto">
          {typeof icon === 'string' ? (
            <img src={icon} alt={title} />
          ) : (
            icon
          )}
        </Box>
        <Box mt={5} mx="auto">
          <Paragraph
            color="default"
            size="m"
            bold
            children={title}
          />
        </Box>
        {description ? (
          <Box mt={1} mx="auto">
            <Paragraph
              color="support"
              size="s"
              children={description}
            />
          </Box>
        ) : null}
      </Box>
    )}
  </BlockLink>
)

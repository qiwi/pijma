import React, {FC} from 'react'

import {LinkControl, Lnk, Typo, Box} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'

export interface FileLinkProps {
  onClick?: (
    href?: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
  ) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  color?: 'default' | 'support'
}

const LinkColor: { [color in NonNullable<FileLinkProps['color']>]: string } = {
  default: '#000',
  support: '#666',
}

const TypoLink = Typo.withComponent(Lnk)

export const FileLink: FC<FileLinkProps> = props => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={renderProps => (
      <TypoLink
        tabIndex={props.tabIndex}
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        color={props.color === undefined ? LinkColor.default : LinkColor[props.color]}
        cursor="pointer"
        decoration="none"
        target={props.target}
        download={props.download}
        rel={props.rel}
        title={props.title}
        size={3.5}
        height={5}
        children={
          <>
            <Box display="inline-block" width={5} height={5} mr={2} css={{fill: props.color === undefined ? LinkColor.default : LinkColor[props.color]}}>
              <Icon name="file" />
            </Box>
            {props.children}
          </>
        }
      />
    )}
  />
)

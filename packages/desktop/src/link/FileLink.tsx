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
  color?: string
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
        color={props.color}
        cursor="pointer"
        decoration="none"
        target={props.target}
        download={props.download}
        rel={props.rel}
        title={props.title}
        size={4}
        height={6}
        children={
          <>
            <Box display="inline-block" width={6} height={6} mr={2}>
              <Icon name="file" />
            </Box>
            {props.children}
          </>
        }
      />
    )}
  />
)

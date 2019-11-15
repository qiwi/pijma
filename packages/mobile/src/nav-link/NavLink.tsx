import React, {FC} from 'react'
import {LinkControl, Lnk, Typo, Box} from '@qiwi/pijma-core'
import {Link} from '../link'

export interface NavLinkProps {
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  stub?: boolean
}

const TypoLink = Typo.withComponent(Lnk)

export const NavLink: FC<NavLinkProps> = (props) => (
  props.stub ? (
    <Box width={12}>
      <Link size="s" stub/>
    </Box>
  ) : (
    <LinkControl
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      href={props.href}
      target={props.target}
      download={props.download}
      rel={props.rel}
      children={(renderProps) => (
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
          color={renderProps.hover || renderProps.focus ? '#000' : '#666'}
          transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
          cursor="pointer"
          decoration="none"
          target={props.target}
          download={props.download}
          rel={props.rel}
          title={props.title}
          size={3.5}
          height={5}
          weight={300}
          children={props.children}
        />
      )}
    />
    )
)

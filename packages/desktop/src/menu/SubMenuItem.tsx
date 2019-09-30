import React, {FC} from 'react'

import {Box} from '@qiwi/pijma-core'

import {MenuLink, MenuLinkProps} from './MenuLink'

import {Paragraph} from '../typography'

export interface SubMenuItemProps extends MenuLinkProps {
  text: string
}

export const SubMenuItem: FC<SubMenuItemProps> = (props) => (
  <MenuLink
    tabIndex={props.tabIndex}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    title={props.title}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  >
    <Box py={4} px={6}>
      <Paragraph bold children={props.text}/>
    </Box>
  </MenuLink>
)

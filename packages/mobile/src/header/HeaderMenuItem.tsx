import React, {FC, ReactNode} from 'react'

import {Flex, FlexItem, styled} from '@qiwi/pijma-core'
import {Paragraph} from '@qiwi/pijma-mobile'

export interface HeaderMenuItemProps {
  text: string
  notes: string
  href?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onClick?: () => void
}

const HeaderMenuLink = styled(Flex.withComponent('a'))({
  display: 'flex',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  wordWrap: 'break-word',
  '&:hover, &:active, &:focus': {
    background: '#f5f5f5',
  },
})

export const HeaderMenuItem: FC<HeaderMenuItemProps> = ({onClick, leftIcon, rightIcon, text, notes}) => (
  <HeaderMenuLink tabIndex={1} px={4} onClick={onClick} align="center" minHeight={14}>
    {leftIcon ? (
      <FlexItem shrink={0} width={6} height={6} mr={3}>
        {leftIcon}
      </FlexItem>
    ) : (
      null
    )}
    <FlexItem grow={1}>
      <Flex direction="column">
        <Paragraph bold>{text}</Paragraph>
        {notes ? (
          <Paragraph size="s" color="support">
            {notes}
          </Paragraph>
        ) : (
          null
        )}
      </Flex>
    </FlexItem>
    {rightIcon ? (
      <FlexItem shrink={0} width={6} height={6} ml={3}>
        {rightIcon}
      </FlexItem>
    ) : (
      null
    )}
  </HeaderMenuLink>
)

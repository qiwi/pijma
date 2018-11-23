import React, {FunctionComponent, Children, ReactNode} from 'react'

import {styled} from '@qiwi/pijma-core'

import ActionsProps from './ActionProps'

const ActionsList = styled.div<ActionsProps>((props) => ({
  display: props.vertical ? 'inline-block' : 'inline-flex',
  alignItems: props.vertical ? undefined : 'center',
  maxWidth: '100%',
}))

const ActionsItem = styled.div<ActionsProps>((props) => ({
  display: 'block',
  textAlign: 'center',
  marginBottom: (
    !props.vertical ? (
      undefined
    ) : props.size === 'accent' ? (
      24
    ) : props.size === 'normal' ? (
      20
    ) : props.size === 'minor' ? (
      16
    ) : (
      undefined
    )
  ),
  marginRight: (
    props.vertical ? (
      undefined
    ) : props.size === 'accent' ? (
      24
    ) : props.size === 'normal' ? (
      20
    ) : props.size === 'minor' ? (
      16
    ) : (
      undefined
    )
  ),
  '&:last-child': {
    marginBottom: 0,
    marginRight: 0,
  },
}))

const Actions: FunctionComponent<ActionsProps> = (props) => (
  <ActionsList {...props}>
    {Children.map(props.children, (child: ReactNode, key: number) => (
      <ActionsItem key={key} {...props}>
        {child}
      </ActionsItem>
    ))}
  </ActionsList>
)

export default Actions

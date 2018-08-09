import React, {SFC, ReactNode, Children} from 'react'

import {styled, StyledComponent, Theme, indent} from '@qiwi/pijma-core'

const ActionsList: StyledComponent<{}, {}, Theme> = styled('div')({
  display: 'block',
  width: '100%',
})

const ActionsItem: StyledComponent<{}, {}, Theme> = styled('div')({
  display: 'block',
  width: '100%',
  ...indent(20),
})

const Actions: SFC<{}> = (props) => (
  <ActionsList>
    {Children.map(props.children, (child: ReactNode, key: number) => (
      <ActionsItem key={key}>
        {child}
      </ActionsItem>
    ))}
  </ActionsList>
)

export default Actions

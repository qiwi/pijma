import React, {FunctionComponent, ReactNode, Children} from 'react'

import {styled, indent} from '@qiwi/pijma-core'

const ActionsList = styled.div({
  display: 'block',
  width: '100%',
})

const ActionsItem = styled.div({
  display: 'block',
  width: '100%',
  ...indent(20),
})

const Actions: FunctionComponent<{}> = (props) => (
  <ActionsList>
    {Children.map(props.children, (child: ReactNode, key: number) => (
      <ActionsItem key={key}>
        {child}
      </ActionsItem>
    ))}
  </ActionsList>
)

export default Actions

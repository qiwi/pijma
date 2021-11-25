import React, {FC} from 'react'

export default interface CollapseControlProps {
  children: FC<{
    transitionEnded: boolean
    expanded: boolean
    onClick: React.MouseEventHandler
    onTransitionEnd: React.TransitionEventHandler
  }>
}

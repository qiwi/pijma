import React from 'react'
import Transition, {ENTERED, ENTERING, EXITED, EXITING} from 'react-transition-group/Transition'

import {cx} from '../styled'

import SimpleTransitionProps from './SimpleTransitionProps'

const statusClassName = (status: string, props: SimpleTransitionProps): string | undefined => {
  const {
    timeout,
    enteringClassName,
    enteredClassName,
    enterClassName,
    exitingClassName,
    exitedClassName,
    exitClassName,
  } = props
  const enter = typeof timeout === 'number' ? timeout : timeout?.enter || 0
  const exit = typeof timeout === 'number' ? timeout : timeout?.exit || 0
  switch (status) {
    case ENTERING:
      return enteringClassName ? enteringClassName(enter) : enterClassName ? enterClassName(enter) : undefined
    case ENTERED:
      return enteredClassName ? enteredClassName(enter) : enterClassName ? enterClassName(enter) : undefined
    case EXITING:
      return exitingClassName ? exitingClassName(exit) : exitClassName ? exitClassName(enter) : undefined
    case EXITED:
      return exitedClassName ? exitedClassName(exit) : exitClassName ? exitClassName(enter) : undefined
  }
  return undefined
}

const SimpleTransition: React.FunctionComponent<SimpleTransitionProps> = ({children, ...props}) => (
  <Transition {...props}>
    {React.isValidElement(children) && React.Children.only(children) ? (
      (status) => React.cloneElement(children, {
        className: cx(children.props.className, statusClassName(status, props)),
      })
    ) : (
      children
    )}
  </Transition>
)

export default SimpleTransition

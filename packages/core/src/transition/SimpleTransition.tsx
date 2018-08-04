import React from 'react'
import {cx} from 'emotion'
import Transition, {ENTERED, ENTERING, EXITED, EXITING} from 'react-transition-group/Transition'

import SimpleTransitionProps from './SimpleTransitionProps'

const statusClassName = (status: string, props: SimpleTransitionProps): string | undefined => {
  const enter = typeof props.timeout === 'number' ? props.timeout : props.timeout.enter || 0
  const exit = typeof props.timeout === 'number' ? props.timeout : props.timeout.exit || 0
  switch (status) {
    case ENTERING:
      return props.enteringClassName ? props.enteringClassName(enter) : props.enterClassName ? props.enterClassName(enter) : undefined
    case ENTERED:
      return props.enteredClassName ? props.enteredClassName(enter) : props.enterClassName ? props.enterClassName(enter) : undefined
    case EXITING:
      return props.exitingClassName ? props.exitingClassName(exit) : props.exitClassName ? props.exitClassName(enter) : undefined
    case EXITED:
      return props.exitedClassName ? props.exitedClassName(exit) : props.exitClassName ? props.exitClassName(enter) : undefined
  }
  return undefined
}


const SimpleTransition: React.SFC<SimpleTransitionProps> = ({children, ...props}) => (
  <Transition {...props}>
    {React.isValidElement(children) ? (
      (status: string) => React.cloneElement(children, {
        className: cx(children.props.className, statusClassName(status, props)),
      })
    ) : (
      children
    )}
  </Transition>
)

export default SimpleTransition

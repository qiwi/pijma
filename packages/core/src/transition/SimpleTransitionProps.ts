import React from 'react'
import {TransitionProps} from 'react-transition-group/Transition'

export default interface SimpleTransitionProps extends TransitionProps {
  children?: React.SFC<{
    className?: string
  }>
  enterClassName?: (timeout: number) => string
  enteredClassName?: (timeout: number) => string
  enteringClassName?: (timeout: number) => string
  exitClassName?: (timeout: number) => string
  exitingClassName?: (timeout: number) => string
  exitedClassName?: (timeout: number) => string
}

import { TransitionProps } from 'react-transition-group/Transition'

export type SimpleTransitionProps = TransitionProps & {
  enterClassName?: (timeout: number) => string
  enteredClassName?: (timeout: number) => string
  enteringClassName?: (timeout: number) => string
  exitClassName?: (timeout: number) => string
  exitingClassName?: (timeout: number) => string
  exitedClassName?: (timeout: number) => string
}

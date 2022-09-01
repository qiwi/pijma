import { ReactElement } from 'react'

import { TStepVariant } from './interfaces'

export default interface StepProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  variant: TStepVariant
  text?: number
  icon?: ReactElement
}

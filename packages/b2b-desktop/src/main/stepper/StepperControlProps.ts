import { ReactElement } from 'react'

import { TStepVariant } from '../../atom/step/interfaces'

export default interface StepperControlProps {
  step: number
  steps: number
  children: (props: {
    currentStep: number
    variant: TStepVariant
  }) => ReactElement
}

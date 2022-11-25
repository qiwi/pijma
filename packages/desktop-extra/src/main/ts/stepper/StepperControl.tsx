import React, { FC, useMemo } from 'react'

import StepperControlProps from './StepperControlProps'

const StepperControl: FC<StepperControlProps> = ({ step, steps, children }) => {
  const stepsArray = useMemo(() => [...new Array(steps)], [steps])
  return (
    <>
      {stepsArray.map((_, index) => {
        const currentStep = index + 1
        const variant =
          currentStep === step
            ? 'focus'
            : (currentStep < step
            ? 'active'
            : 'default')

        return children({ currentStep, variant })
      })}
    </>
  )
}

export default StepperControl

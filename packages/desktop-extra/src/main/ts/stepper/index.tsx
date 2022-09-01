import { Flex, FlexItem } from '@qiwi/pijma-core'
import React, { FC, Fragment } from 'react'

import { Divider } from '../divider'
import { Step } from '../step'
import StepperControl from './StepperControl'
import StepperProps from './StepperProps'

const Stepper: FC<StepperProps> = ({
  step = 1,
  steps,
  dividerWidth = 25,
  onChange,
}) => {
  if (!steps || steps <= 1) {
    return null
  }

  return (
    <Flex align="center">
      <StepperControl steps={steps} step={step}>
        {({ variant, currentStep }) => (
          <Fragment key={currentStep}>
            <FlexItem>
              <Step
                variant={variant}
                text={currentStep}
                onClick={() => onChange && onChange(currentStep)}
              />
            </FlexItem>
            {currentStep < steps && (
              <FlexItem width={dividerWidth} px={3}>
                <Divider active={variant === 'active'} />
              </FlexItem>
            )}
          </Fragment>
        )}
      </StepperControl>
    </Flex>
  )
}

export { Stepper }

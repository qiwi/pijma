import { ButtonControl, Typo } from '@qiwi/pijma-core'
import { Text } from '@qiwi/pijma-desktop'
import React, { FC } from 'react'

import StepProps from './StepProps'
import StepButton from './StepStyle'

const Step: FC<StepProps> = (props) => {
  const { icon, text, variant = 'default', ...rest } = props
  return (
    <ButtonControl {...rest}>
      {({ active, focus, hover, ...events }) => (
        <StepButton variant={variant} {...events}>
          <Text>
            <Typo css={{ overflowWrap: 'normal' }}>{icon || text}</Typo>
          </Text>
        </StepButton>
      )}
    </ButtonControl>
  )
}

export { Step }

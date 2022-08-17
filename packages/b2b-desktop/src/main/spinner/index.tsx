import { Spinner } from '@qiwi/pijma-core'
import React from 'react'

import { COLOR, DIMEN } from '../theme'

export const B2bSpinner = () => (
  <Spinner
    color={COLOR.PRIMARY}
    width={DIMEN.SPINNER_SIZE}
    height={DIMEN.SPINNER_SIZE}
  />
)

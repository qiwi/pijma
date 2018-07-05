import React from 'react'
import {keyframes} from 'emotion'

import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const animation = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const SpinnerMain: StyledComponent<Partial<JSX.IntrinsicElements['svg']>, {}, Theme> = styled('svg')({
  width: 24,
  height: 24,
  transformOrigin: 'center center',
  animation: `${animation} 2000ms linear infinite`,
})

SpinnerMain.defaultProps = {
  viewBox: '24 24 48 48',
  focusable: 'false',
}

export default SpinnerMain

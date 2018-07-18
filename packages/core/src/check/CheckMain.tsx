import React from 'react'

import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

import CheckProps from './CheckProps'

const CheckMain: StyledComponent<CheckProps, JSX.IntrinsicElements['svg'], Theme> = styled('svg')((props) => ({}))

CheckMain.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  focusable: 'false',
}

export default CheckMain

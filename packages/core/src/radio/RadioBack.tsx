import React from 'react'

import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

import RadioProps from './RadioProps'

const RadioBack: StyledComponent<RadioProps, JSX.IntrinsicElements['rect'], Theme> = styled('rect')((props) => ({
  transition: 'all 120ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  fill: props.theme.color.gray.light,
}))

RadioBack.defaultProps = {
  width: 18,
  height: 18,
  x: 3,
  y: 3,
  rx: 9,
  ry: 9,
}

export default RadioBack

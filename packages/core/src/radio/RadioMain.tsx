import React from 'react'

import {styled} from '@qiwi/pijma-core'

import RadioProps from './RadioProps'

const RadioMain = styled.svg<RadioProps>((props) => ({}))

RadioMain.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  focusable: 'false',
}

export default RadioMain

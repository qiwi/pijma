import React from 'react'

import {styled} from '@qiwi/pijma-core'

import CheckProps from './CheckProps'

const CheckMain = styled.svg<CheckProps>((props) => ({}))

CheckMain.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  focusable: 'false',
}

export default CheckMain

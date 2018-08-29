import React from 'react'

import {styled} from '@qiwi/pijma-core'

import RadioProps from './RadioProps'

const RadioMark = styled.rect<RadioProps>((props) => ({
  transition: 'all 120ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  fill: (
    props.checked ? (
      props.disabled ? (
        props.theme.color.gray.normal
      ) : (
        props.theme.color.black
      )
    ) : (
      'transparent'
    )
  ),
}))

RadioMark.defaultProps = {
  width: 8,
  height: 8,
  x: 8,
  y: 8,
  rx: 4,
  ry: 4,
}

export default RadioMark

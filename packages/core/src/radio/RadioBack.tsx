import {styled} from '@qiwi/pijma-core'

import RadioProps from './RadioProps'

const RadioBack = styled.rect<RadioProps>((props) => ({
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

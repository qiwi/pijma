import {styled} from '@qiwi/pijma-core'

import CheckProps from './CheckProps'

const CheckBack = styled.rect<CheckProps>((props) => ({
  transition: 'all 120ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  fill: props.theme.color.gray.light,
}))

CheckBack.defaultProps = {
  width: 18,
  height: 18,
  x: 3,
  y: 3,
  rx: 3,
  ry: 3,
}

export default CheckBack

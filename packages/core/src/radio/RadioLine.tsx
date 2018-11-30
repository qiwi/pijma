import {styled} from '@qiwi/pijma-core'

import RadioProps from './RadioProps'

const RadioLine = styled('path')<RadioProps>((props) => ({
  transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  fill: (
    props.focused && !props.disabled ? (
      props.theme.color.brand
    ) : (
      'transparent'
    )
  ),
}))

RadioLine.defaultProps = {
  d: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z',
}

export default RadioLine

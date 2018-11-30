import {styled} from '@qiwi/pijma-core'

import CheckProps from './CheckProps'

const CheckLine = styled('path')<CheckProps>((props) => ({
  transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  fill: (
    props.focused && !props.disabled ? (
      props.theme.color.brand
    ) : (
      'transparent'
    )
  ),
}))

CheckLine.defaultProps = {
  d: 'M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm1 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7z',
}

export default CheckLine

import {styled} from '@qiwi/pijma-core'

import CheckProps from './CheckProps'

const CheckMark = styled.path<CheckProps>((props) => ({
  transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
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

CheckMark.defaultProps = {
  d: 'M7.553 8.732a1.5 1.5 0 1 0-2.106 2.136l4.565 4.5a1.5 1.5 0 0 0 2.156-.051l9.957-10.8a1.5 1.5 0 1 0-2.206-2.034l-8.905 9.66-3.461-3.411z',
}

export default CheckMark

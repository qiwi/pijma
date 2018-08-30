import {styled} from '@qiwi/pijma-core'

import RadioProps from './RadioProps'

const RadioMain = styled.svg<RadioProps>({})

RadioMain.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  focusable: 'false',
}

export default RadioMain

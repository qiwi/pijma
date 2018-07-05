import {rgba} from 'polished'
import {styled, StyledComponent, Theme} from '@qiwi/pijma-core'

const FieldUnderHelp: StyledComponent<{}, {}, Theme> = styled('div')(({theme}) => ({
  textAlign: 'left',
  color: rgba(theme.color.black, 0.5),
}))

export default FieldUnderHelp

import {rgba} from 'polished'
import styled from '../styled'
import StyledComponent from '../StyledComponent'
import Theme from '../Theme'

const FieldUnderHelp: StyledComponent<{}, {}, Theme> = styled('div')(({theme}) => ({
  textAlign: 'left',
  color: rgba(theme.color.black, 0.5),
}))

export default FieldUnderHelp

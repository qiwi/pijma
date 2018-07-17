import styled from '../styled'
import StyledComponent from '../StyledComponent'
import Theme from '../Theme'

const FieldUnderAction: StyledComponent<{}, {}, Theme> = styled('div')(({theme}) => ({
  whiteSpace: 'nowrap',
  paddingLeft: 20,
  marginLeft: 'auto',
  textAlign: 'right',
}))

export default FieldUnderAction

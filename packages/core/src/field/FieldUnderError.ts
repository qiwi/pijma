import styled from '../styled'
import StyledComponent from '../StyledComponent'
import Theme from '../Theme'

const FieldUnderError: StyledComponent<{}, {}, Theme> = styled('div')((props) => ({
  textAlign: 'left',
  color: props.theme.color.error,
}))

export default FieldUnderError

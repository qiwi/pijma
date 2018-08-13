import styled from '../styled'
import StyledComponent from '../StyledComponent'
import Theme from '../Theme'

const Field: StyledComponent<{}, {}, Theme> = styled('div')((props) => ({
  position: 'relative',
}))

export default Field

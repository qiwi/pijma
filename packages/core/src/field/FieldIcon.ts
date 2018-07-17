import styled from '../styled'
import StyledComponent from '../StyledComponent'
import Theme from '../Theme'

const FieldIcon: StyledComponent<{}, {}, Theme> = styled('div')({
  position: 'absolute',
  zIndex: 1,
  top: 2,
  right: 0,
  width: 24,
  height: 24,
})

export default FieldIcon

import {rgba} from 'polished'
import styled from '../styled'

const FieldUnderHelp = styled.div((props) => ({
  textAlign: 'left',
  color: rgba(props.theme.color.black, 0.5),
}))

export default FieldUnderHelp
